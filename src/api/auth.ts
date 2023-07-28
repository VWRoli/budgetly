import { API_URL } from '../constants/variables';
import type { ILoginUser } from '../interfaces/loginUser';
import type { IRegisterUser } from '../interfaces/registerUser';

export const register = async (userData: IRegisterUser) => {
	try {
		const response = await fetch(`${API_URL}/auth/signup`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(userData)
		});

		if (!response.ok) {
			// Handle error response (if any)
			const errorData = await response.json();
			throw new Error(errorData.message || 'Registration failed.');
		}

		const responseData = await response.json();
		return responseData;
	} catch (error: any) {
		// Handle fetch errors or any other exceptions
		throw error;
	}
};

export const login = async (userData: ILoginUser) => {
	try {
		const response = await fetch(`${API_URL}/auth/signin`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(userData)
		});

		if (!response.ok) {
			// Handle error response (if any)
			const errorData = await response.json();
			throw new Error(errorData.message || 'Login failed.');
		}

		const responseData = await response.json();
		return responseData;
	} catch (error: any) {
		// Handle fetch errors or any other exceptions
		throw error;
	}
};
