import { redirect } from '@sveltejs/kit';
import type { Actions } from './$types';

export async function load({ locals }) {
	const user = locals.user;

	if (!user) {
		throw redirect(307, '/auth/login');
	}
	return {
		user,
	};
}

export const actions: Actions = {
	logout: async (event) => {
		event.cookies.delete('AuthorizationToken');
		throw redirect(302, '/');
	},
};
