import type { ECurrency } from '$lib/enums/currency.enum';
import type { ELocale } from '$lib/enums/locale.enum';

export interface IBudgetDto {
	name: string;
	currency: ECurrency;
	userId: number;
}
export interface IBudget extends IBudgetDto {
	id: number;
	locale: ELocale;
	availableToBudget: number;
}
