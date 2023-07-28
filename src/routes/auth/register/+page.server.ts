import { register } from '../../../api/auth';
import type { IRegisterUser } from '../../../interfaces/registerUser';
import { validateForm } from '../../../utils/helpers';
import { signupSchema } from '../../../utils/validationSchemas';
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
				error: errors
			});
		}

		try {
			await register(userData);
			throw redirect(302, '/dashboard');
		} catch (error) {
			console.log({ error });
			return fail(500, {
				error
			});
		}
	}
};
