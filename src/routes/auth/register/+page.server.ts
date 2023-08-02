import { register } from '../../../api/auth';
import type { IRegisterUser } from '../../../interfaces/registerUser';
import { validateForm } from '../../../utils/helpers';
import { signupSchema } from '../../../lib/validationSchemas';
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

		let errors: any = {};

		const { email, password, confirmPassword } = formData as {
			email: string;
			password: string;
			confirmPassword: string;
		};
		const userData: IRegisterUser = { email, password, confirmPassword };

		errors = await validateForm(signupSchema, userData);
		if (Object.keys(errors).length > 0) {
			return fail(400, {
				error: errors,
			});
		}

		try {
			const res = await register(userData);

			// Set the cookie
			event.cookies.set('AuthorizationToken', `Bearer ${res.access_token}`, {
				httpOnly: false, //todo
				path: '/',
				secure: true,
				sameSite: 'strict',
				maxAge: 60 * 60 * 24, // 1 day
			});
		} catch (error) {
			return fail(401, {
				error,
			});
		}
	},
};
