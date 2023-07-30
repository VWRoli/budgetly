import { redirect } from '@sveltejs/kit';
import type { Actions } from './$types';
import type { IBudgetDto } from '../../interfaces/budget';
import type { ECurrency } from '../../utils/enums/currency.enum';
import { create, fetchData } from '../../api';
import type { IAccountDto } from '../../interfaces/account';
import type { ICategoryDto } from '../../interfaces/category';
import type { ISubCategoryDto } from '../../interfaces/subCategory';

export async function load({ locals, cookies }) {
	const user = locals.user;

	if (!user) {
		throw redirect(307, '/auth/login');
	}

	const token = cookies.get('AuthorizationToken');

	return {
		user,
		defaultBudget: fetchData(
			`/budgets/budget/${user.defaultBudgetId}`,
			token as string
		),
		budgets: fetchData(`/budgets/${user.id}`, token as string),
		accounts: fetchData(`/accounts/${user.defaultBudgetId}`, token as string),
		categories: fetchData(
			`/categories/${user.defaultBudgetId}`,
			token as string
		),
	};
}

export const actions: Actions = {
	logout: async (event) => {
		event.cookies.delete('AuthorizationToken');
		event.locals.user = null;
		throw redirect(302, '/');
	},
	createBudget: async ({ request, locals, cookies }) => {
		const formData = Object.fromEntries(await request.formData());

		const { name, currency } = formData as {
			name: string;
			currency: ECurrency;
		};
		const budgetData: IBudgetDto = {
			name,
			currency,
			userId: locals.user?.id as number,
		};
		const token = cookies.get('AuthorizationToken');

		const budget = await create('/budgets', budgetData, token as string);

		locals.defaultBudget = budget;
	},
	createAccount: async ({ request, locals, cookies }) => {
		const formData = Object.fromEntries(await request.formData());

		const { name } = formData as {
			name: string;
		};

		const accountData: IAccountDto = {
			name,
			balance: 0,
			budgetId: locals.user?.defaultBudgetId as number,
		};

		const token = cookies.get('AuthorizationToken');

		await create('/accounts', accountData, token as string);
	},
	createCategory: async ({ request, locals, cookies }) => {
		const formData = Object.fromEntries(await request.formData());

		const { title } = formData as {
			title: string;
		};

		const categoryData: ICategoryDto = {
			title,
			budgetId: locals.user?.defaultBudgetId as number,
		};

		const token = cookies.get('AuthorizationToken');

		await create('/categories', categoryData, token as string);
	},
	createSubCategory: async ({ request, locals, cookies }) => {
		const formData = Object.fromEntries(await request.formData());

		const { title, categoryId } = formData as {
			title: string;
			categoryId: string;
		};

		const subCategoryData: ISubCategoryDto = {
			title,
			categoryId: +categoryId,
			budgetId: locals.user?.defaultBudgetId as number,
		};

		const token = cookies.get('AuthorizationToken');

		await create('/sub-categories', subCategoryData, token as string);
	},
};
