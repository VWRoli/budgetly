import { API_URL } from '../constants/variables';

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

export const fetchData = async (path: string, token: string): Promise<any> => {
	try {
		const response = await fetch(`${API_URL}${path}`, {
			method: 'GET',
			credentials: 'include',
			headers: {
				Accept: 'application/json',
				'content-type': 'application/json',
				Authorization: token,
			},
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

export const create = async (
	path: string,
	payload: any,
	token: string
): Promise<any> => {
	try {
		const response = await fetch(`${API_URL}${path}`, {
			method: 'POST',
			credentials: 'include',
			headers: {
				Accept: 'application/json',
				'content-type': 'application/json',
				Authorization: token,
			},
			body: JSON.stringify(payload),
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

export const updateBudgetedValue = async (
	id: number,
	payload: any,
	token: string
): Promise<any> => {
	try {
		const response = await fetch(`${API_URL}/sub-categories/${id}`, {
			method: 'PUT',
			credentials: 'include',
			headers: {
				Accept: 'application/json',
				'content-type': 'application/json',
				Authorization: token,
			},
			body: JSON.stringify(payload),
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
