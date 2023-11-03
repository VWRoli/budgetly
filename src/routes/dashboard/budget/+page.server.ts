import { fail, redirect } from '@sveltejs/kit';
import type { Actions } from './$types';
import { create, updateBudgetedValue, updateDefaultBudget } from '../../../api';
import type { ICategoryDto } from '../../../interfaces/category';
import type { ISubCategoryDto } from '../../../interfaces/subCategory';
import { validateForm } from '$lib/utils/helpers';
import {
	accountSchema,
	budgetSchema,
	categorySchema,
	changeDefaultBudgetSchema,
	updateBudgetedSchema,
} from '$lib/validationSchemas';
import type { IAccountDto } from '../../../interfaces/account';
import type { IBudgetDto } from '../../../interfaces/budget';
import type { ECurrency } from '$lib/enums/currency.enum';

export const actions: Actions = {
	logout: async (event) => {
		event.cookies.delete('AuthorizationToken', { path: '/' });
		event.locals.user = null;
		throw redirect(302, '/');
	},
	createCategory: async ({ request, locals, cookies }) => {
		const formData = Object.fromEntries(await request.formData());

		let errors: { [k: string]: string } = {};

		const { title } = formData as {
			title: string;
		};

		errors = await validateForm(categorySchema, formData);
		if (Object.keys(errors).length > 0) {
			return fail(400, {
				error: errors,
			});
		}

		const categoryData: ICategoryDto = {
			title,
			budgetId: locals.user?.defaultBudgetId as number,
		};

		const token = cookies.get('AuthorizationToken');

		try {
			await create('/categories', categoryData, token as string);
		} catch (error: any) {
			return fail(400, {
				error: { message: error.message },
			});
		}
	},
	createSubCategory: async ({ request, locals, cookies }) => {
		const formData = Object.fromEntries(await request.formData());
		let errors: { [k: string]: string } = {};

		const { title, categoryId } = formData as {
			title: string;
			categoryId: string;
		};
		errors = await validateForm(categorySchema, formData);
		if (Object.keys(errors).length > 0) {
			return fail(400, {
				error: errors,
			});
		}

		const subCategoryData: ISubCategoryDto = {
			title,
			categoryId: +categoryId,
			budgetId: locals.user?.defaultBudgetId as number,
		};
		const token = cookies.get('AuthorizationToken');

		try {
			await create('/sub-categories', subCategoryData, token as string);
			return { categoryId: categoryId };
		} catch (error: any) {
			return fail(400, {
				error: { message: error.message },
			});
		}
	},
	createBudget: async ({ request, locals, cookies }) => {
		const formData = Object.fromEntries(await request.formData());

		const { name, currency } = formData as {
			name: string;
			currency: ECurrency;
		};

		let errors: { [k: string]: string } = {};
		errors = await validateForm(budgetSchema, formData);
		if (Object.keys(errors).length > 0) {
			return fail(400, {
				error: errors,
			});
		}
		const budgetData: IBudgetDto = {
			name,
			currency,
			userId: locals.user?.id as number,
		};
		const token = cookies.get('AuthorizationToken');

		try {
			const budget = await create('/budgets', budgetData, token as string);
			locals.defaultBudget = budget;
		} catch (error: any) {
			return fail(400, {
				error: { message: error.message },
			});
		}
	},
	createAccount: async ({ request, locals, cookies }) => {
		const formData = Object.fromEntries(await request.formData());

		let errors: { [k: string]: string } = {};

		const { name, balance } = formData as {
			name: string;
			balance: string;
		};
		errors = await validateForm(accountSchema, formData);
		if (Object.keys(errors).length > 0) {
			return fail(400, {
				error: errors,
			});
		}

		const accountData: IAccountDto = {
			name,
			balance: parseInt(balance),
			budgetId: locals.user?.defaultBudgetId as number,
		};

		const token = cookies.get('AuthorizationToken');

		try {
			await create('/accounts', accountData, token as string);
		} catch (error: any) {
			return fail(400, {
				error: { message: error.message },
			});
		}
	},
	updateBudgetedAmount: async ({ request, cookies }) => {
		const formData = Object.fromEntries(await request.formData());

		let errors: { [k: string]: string } = {};

		const { amount, id } = formData as {
			id: string;
			amount: string;
		};
		errors = await validateForm(updateBudgetedSchema, formData);
		if (Object.keys(errors).length > 0) {
			return fail(400, {
				error: errors,
			});
		}

		const subCategoryData = {
			budgeted: +amount,
		};

		const token = cookies.get('AuthorizationToken');
		try {
			await updateBudgetedValue(+id, subCategoryData, token as string);
			return { id };
		} catch (error: any) {
			return fail(400, {
				error: { message: error.message },
			});
		}
	},

	changeDefaultBudget: async ({ request, cookies, locals }) => {
		const formData = Object.fromEntries(await request.formData());

		let errors: { [k: string]: string } = {};

		const { id } = formData as {
			id: string;
		};

		errors = await validateForm(changeDefaultBudgetSchema, formData);
		if (Object.keys(errors).length > 0) {
			return fail(400, {
				error: errors,
			});
		}
		const token = cookies.get('AuthorizationToken');
		try {
			const res = await updateDefaultBudget(
				+(locals.user?.id as number),
				+id,
				token as string
			);
		} catch (error: any) {
			return fail(400, {
				error: { message: error.message },
			});
		}
	},
};
