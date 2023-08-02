import type * as Yup from 'yup';
import type { ILoginUser } from '../interfaces/loginUser';
import type { IRegisterUser } from '../interfaces/registerUser';
import { ELocale } from './enums/locale.enum';
import type { ECurrency } from './enums/currency.enum';

export function capitalizeFirstLetter(string: string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
}

export async function validateForm(schema: Yup.ObjectSchema<any>, data: any) {
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

export const formatCurrency = (
	amount: number,
	locale: ELocale,
	currency: ECurrency
) => {
	return new Intl.NumberFormat(locale, {
		style: 'currency',
		currency: currency.toUpperCase(),
		maximumFractionDigits: locale === ELocale.HU ? 0 : 2,
	}).format(amount);
};

export const formatDate = (date: Date, locale: ELocale) => {
	let options: Intl.DateTimeFormatOptions = {
		year: 'numeric',
		month: 'numeric',
		day: 'numeric',
	};

	return new Intl.DateTimeFormat(locale, options).format(new Date(date));
};
