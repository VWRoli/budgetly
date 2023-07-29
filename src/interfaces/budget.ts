import type { ECurrency } from '../utils/enums/currency.enum';

export interface IBudget {
	id?: number;
	name: string;
	currency: ECurrency;
	userId?: number;
}
