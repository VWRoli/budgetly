import { redirect } from '@sveltejs/kit';
import { fetchData } from '../../api';

export async function load({ locals, cookies }) {
	const user = locals.user;

	if (!user) {
		throw redirect(307, '/auth/login');
	}

	const token = cookies.get('AuthorizationToken');

	return {
		user,
		defaultBudget: user.defaultBudgetId
			? fetchData(`/budgets/budget/${user.defaultBudgetId}`, token as string)
			: null,
		budgets: fetchData(`/budgets/${user.id}`, token as string),
		accounts: fetchData(`/accounts/${user.defaultBudgetId}`, token as string),
		categories: fetchData(
			`/categories/${user.defaultBudgetId}`,
			token as string
		),
		transactions: fetchData(
			`/transactions/budget/${user.defaultBudgetId}`,
			token as string
		),
	};
}
