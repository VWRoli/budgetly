import { redirect } from '@sveltejs/kit';
import { fetchData } from '../../api';
import type { ICategory } from '../../interfaces/category';
import type { IAccount } from '../../interfaces/account';
import type { IBudget } from '../../interfaces/budget';

export async function load({ locals, cookies }) {
	const user = locals.user;

	if (!user) {
		throw redirect(307, '/auth/login');
	}

	const token = cookies.get('AuthorizationToken');

	return {
		user,
		defaultBudget: user.defaultBudgetId
			? (fetchData(
					`/budgets/budget/${user.defaultBudgetId}`,
					token as string
			  ) as Promise<IBudget>)
			: null,
		budgets: fetchData(`/budgets/${user.id}`, token as string) as Promise<
			IBudget[]
		>,
		accounts: fetchData(
			`/accounts/${user.defaultBudgetId}`,
			token as string
		) as Promise<IAccount[]>,
		categories: fetchData(
			`/categories/${user.defaultBudgetId}`,
			token as string
		) as Promise<ICategory[]>,
	};
}
