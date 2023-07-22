import type * as Yup from 'yup';

export function capitalizeFirstLetter(string: string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
}
interface FormData {
	// Add properties according to your actual form data structure
	[key: string]: any;
}

export const formValidation = (schema: Yup.ObjectSchema<FormData>, formData: FormData) => {
	let errors: any = {};
	try {
		schema.validateSync(formData, { abortEarly: false });
		alert(JSON.stringify(formData, null, 2));
		errors = {};
	} catch (err) {
		errors = (err as any).inner.reduce((acc: any, err: any) => {
			return { ...acc, [err.path]: err.message };
		}, {});
	}
	return errors;
};
