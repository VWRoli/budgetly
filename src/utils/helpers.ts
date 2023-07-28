import type * as Yup from 'yup';
import type { ILoginUser } from '../interfaces/loginUser';
import type { IRegisterUser } from '../interfaces/registerUser';

export function capitalizeFirstLetter(string: string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
}

export async function validateForm(
	schema: Yup.ObjectSchema<IRegisterUser | ILoginUser>,
	data: IRegisterUser | ILoginUser
) {
	let errors;
	try {
		await schema.validate(data, { abortEarly: false });
		errors = {};
	} catch (err) {
		errors = (err as any).inner.reduce((acc: any, err: any) => {
			return { ...acc, [err.path]: err.message };
		}, {});
	}
	return errors;
}
