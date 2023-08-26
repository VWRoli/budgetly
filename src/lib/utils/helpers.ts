import type * as Yup from 'yup';
import { ELocale } from '$lib/enums/locale.enum';
import type { ECurrency } from '$lib/enums/currency.enum';
import { ECalculator } from '$lib/enums/calculator';

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
	if (amount === undefined) return 0;
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

export const getCalcButtonType = (type: ECalculator) => {
	switch (type) {
		case ECalculator.CLEAR:
			return 'secondary';
		case ECalculator.OPERATOR:
			return 'primary';
		case ECalculator.EQUAL:
			return 'secondary';
		default:
			return 'primary';
	}
};
