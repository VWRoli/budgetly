export interface IAccountDto {
	name: string;
	budgetId: number;
	balance: number;
}
export interface IAccount extends IAccountDto {
	id: number;
}
