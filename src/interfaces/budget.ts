import type { ECurrency } from '../utils/enums/currency.enum';
import type { ELocale } from '../utils/enums/locale.enum';

export interface IBudgetDto {
	name: string;
	currency: ECurrency;
	userId: number;
}
export interface IBudget extends IBudgetDto {
	id: number;
	locale: ELocale;
}
