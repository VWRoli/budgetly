export interface ITransactionDto {
	payee: string;
	accountId: number;
	categoryId?: number;
	subCategoryId?: number;
	budgetId: number;
	date: Date;
	inflow: null | number;
	outflow: null | number;
}

export interface ITransaction extends ITransactionDto {
	id: number;
	account: {
		id: number;
		name: string;
	};
	category: {
		id: number;
		title: string;
	};
	subCategory: {
		id: number;
		title: string;
	};
}
