import { fail } from '@sveltejs/kit';
import type { Actions } from './$types';
import { create, fetchData } from '../../../api';
import type {
	ITransaction,
	ITransactionDto,
} from '../../../interfaces/transaction';
import { validateForm } from '$lib/utils/helpers';
import { transactionSchema } from '$lib/validationSchemas';
import type { IUser } from '../../../interfaces/user';

export async function load({ locals, cookies, url }) {
	const user = locals.user as IUser;
	const accountId = url.searchParams.get('accountId');
	const token = cookies.get('AuthorizationToken');

	return {
		transactions: accountId
			? ((await fetchData(
					`/transactions/${accountId}`,
					token as string
			  )) as Promise<ITransaction[]>)
			: ((await fetchData(
					`/transactions/budget/${user.defaultBudgetId}`,
					token as string
			  )) as Promise<ITransaction[]>),
		payees: (await fetchData(
			`/transactions/payees/${user.defaultBudgetId}`,
			token as string
		)) as Promise<string[]>,
	};
}

export const actions: Actions = {
	createTransaction: async ({ request, locals, cookies }) => {
		const formData = Object.fromEntries(await request.formData());

		const {
			payee,
			accountId,
			categoryId,
			subCategoryId,
			date,
			inflow,
			outflow,
		} = formData as {
			payee: string;
			accountId: string;
			categoryId: string;
			subCategoryId: string;
			date: string;
			inflow: string;
			outflow: string;
		};

		let errors: { [k: string]: string } = {};
		errors = await validateForm(transactionSchema, formData);
		if (Object.keys(errors).length > 0) {
			return fail(400, {
				error: errors,
			});
		}

		const transactionData: ITransactionDto = {
			payee,
			accountId: +accountId,
			categoryId: +categoryId,
			subCategoryId: +subCategoryId,
			date: new Date(date),
			inflow: inflow ? +inflow : null,
			outflow: outflow ? +outflow : null,
			budgetId: locals.user?.defaultBudgetId as number,
		};
		const token = cookies.get('AuthorizationToken');

		try {
			await create('/transactions', transactionData, token as string);
		} catch (error: any) {
			return fail(400, {
				error: { message: error.message },
			});
		}
	},
	createTransfer: async ({ request, locals, cookies }) => {
		const formData = Object.fromEntries(await request.formData());

		const { fromAccount, toAccount, date, inflow, outflow } = formData as {
			fromAccount: string;
			toAccount: string;
			date: string;
			inflow: string;
			outflow: string;
		};

		const transferData: ITransactionDto = {
			payee: toAccount, //toAccount name
			accountId: +fromAccount, //fromAccount
			date: new Date(date),
			inflow: inflow ? +inflow : null,
			outflow: outflow ? +outflow : null,
			budgetId: locals.user?.defaultBudgetId as number,
		};
		const token = cookies.get('AuthorizationToken');

		try {
			await create('/transactions', transferData, token as string);
		} catch (error: any) {
			return fail(400, {
				error: { message: error.message },
			});
		}
	},
};
