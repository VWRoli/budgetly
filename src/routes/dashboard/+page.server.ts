import { redirect } from '@sveltejs/kit';
import type { Actions } from './$types';
import type { IBudget } from '../../interfaces/budget';
import type { ECurrency } from '../../utils/enums/currency.enum';
import { createBudget, fetchBudgets, fetchDefaultBudget } from '../../api';

export async function load({ locals, cookies }) {
	const user = locals.user;

	if (!user) {
		throw redirect(307, '/auth/login');
	}

	const token = cookies.get('AuthorizationToken');

	return {
		user,
		defaultBudget: fetchDefaultBudget(user.defaultBudgetId, token as string),
		budgets: fetchBudgets(user.id, token as string),
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
		const budgetData: IBudget = {
			name,
			currency,
			userId: locals.user?.id as number,
		};
		const token = cookies.get('AuthorizationToken');

		const budget = await createBudget(budgetData, token as string);

		locals.defaultBudget = budget;
	},
};
