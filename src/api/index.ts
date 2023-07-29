import { API_URL } from '../constants/variables';
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
