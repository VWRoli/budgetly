import type { ECurrency } from '../utils/enums/currency.enum';
import type { ELocale } from '../utils/enums/locale.enum';

export interface IBudget {
	id?: number;
	name: string;
	currency: ECurrency;
	locale: ELocale;
	userId?: number;
}
