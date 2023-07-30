export interface ITransactionDto {
	payee: string;
	accountId: number;
	categoryId: number;
	subCategoryId: number;
	date: Date;
	inflow: null | number;
	outlfow: null | number;
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
