export function capitalizeFirstLetter(string: string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
}

export async function validateForm(schema: any, data: any) {
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
