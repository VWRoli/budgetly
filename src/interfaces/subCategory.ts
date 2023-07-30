export interface ISubCategoryDto {
	title: string;
	budgetId: number;
}

export interface ISubCategory extends ISubCategoryDto {
	id: number;
	balance: number;
	budgeted: number;
	outflows: number;
}
