export interface ITransaction {
	payee: string;
	accountId: number;
	categoryId: number;
	subCategoryId: number;
	date: Date;
	inflow: null | number;
	outlfow: null | number;
}
