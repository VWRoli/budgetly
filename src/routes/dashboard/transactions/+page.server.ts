import { fail, redirect } from '@sveltejs/kit';
import type { Actions } from './$types';
import { create } from '../../../api';
import type { ITransactionDto } from '../../../interfaces/transaction';
import { validateForm } from '../../../utils/helpers';
import { transactionSchema } from '../../../lib/validationSchemas';

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
