import type { ISubCategory } from './subCategory';

export interface ICategoryDto {
	title: string;
	budgetId: number;
}
export interface ICategory extends ICategoryDto {
	id: number;
	balance: number;
	budgeted: number;
	outflows: number;
	subCategories: ISubCategory[];
}
