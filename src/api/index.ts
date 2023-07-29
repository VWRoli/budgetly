import { API_URL } from '../constants/variables';
import type { IAccount } from '../interfaces/account';
import type { IBudget } from '../interfaces/budget';

export const createBudget = async (
	budget: IBudget,
	token: string
): Promise<IBudget> => {
	try {
		const response = await fetch(`${API_URL}/budgets`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: token,
			},
			body: JSON.stringify(budget),
		});

		if (!response.ok) {
			// Handle error response (if any)
			const errorData = await response.json();
			throw new Error(errorData.message);
		}
		const responseData = await response.json();
		return responseData;
	} catch (error: any) {
		// Handle fetch errors or any other exceptions
		throw error;
	}
};

export const fetchDefaultBudget = async (
	id: number,
	token: string
): Promise<IBudget> => {
	const res = await fetch(`${API_URL}/budgets/budget/${id}`, {
		method: 'GET',
		credentials: 'include',
		headers: {
			Accept: 'application/json',
			'content-type': 'application/json',
			Authorization: token,
		},
	});
	const data = await res.json();

	return data;
};

export const fetchBudgets = async (
	userId: number,
	token: string
): Promise<IBudget[]> => {
	const res = await fetch(`${API_URL}/budgets/${userId}`, {
		method: 'GET',
		credentials: 'include',
		headers: {
			Accept: 'application/json',
			'content-type': 'application/json',
			Authorization: token,
		},
	});
	const data = await res.json();

	return data;
};

export const setDefaultBudget = async (
	userId: number,
	budgetId: number,
	token: string
) => {
	await fetch(`${API_URL}/budgets/${userId}/${budgetId}`, {
		method: 'POST',
		credentials: 'include',
		headers: {
			Accept: 'application/json',
			'content-type': 'application/json',
			Authorization: token,
		},
	});
};

export const fetchAccounts = async (
	budgetId: number,
	token: string
): Promise<IAccount[]> => {
	const res = await fetch(`${API_URL}/accounts/${budgetId}`, {
		method: 'GET',
		credentials: 'include',
		headers: {
			Accept: 'application/json',
			'content-type': 'application/json',
			Authorization: token,
		},
	});
	const data = await res.json();

	return data;
};

export const createAccount = async (
	account: IAccount,
	token: string
): Promise<IAccount> => {
	try {
		const response = await fetch(`${API_URL}/accounts`, {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'content-type': 'application/json',
				Authorization: token,
			},
			body: JSON.stringify(account),
		});

		if (!response.ok) {
			// Handle error response (if any)
			const errorData = await response.json();
			throw new Error(errorData.message);
		}
		const responseData = await response.json();
		return responseData;
	} catch (error: any) {
		// Handle fetch errors or any other exceptions
		throw error;
	}
};
