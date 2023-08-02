import { login } from '../../../api/auth';
import type { ILoginUser } from '../../../interfaces/loginUser';
import type { Actions, PageServerLoad } from './$types';
import { fail, redirect } from '@sveltejs/kit';

export const load: PageServerLoad = (event) => {
	const user = event.locals.user;

	if (user) {
		throw redirect(302, '/dashboard');
	}
};

export const actions: Actions = {
	default: async (event) => {
		const formData = Object.fromEntries(await event.request.formData());

		const { email, password } = formData as { email: string; password: string };
		const userData: ILoginUser = { email, password };

		try {
			const res = await login(userData);
			// Set the cookie
			event.cookies.set('AuthorizationToken', `Bearer ${res.access_token}`, {
				httpOnly: false, //todo
				path: '/',
				secure: true,
				sameSite: 'strict',
				maxAge: 60 * 60 * 24, // 1 day
			});
		} catch (error: any) {
			return fail(401, {
				error: error.message,
			});
		}
	},
};
