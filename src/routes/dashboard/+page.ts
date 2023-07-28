import { redirect } from '@sveltejs/kit';
import { API_URL } from '../../constants/variables.js';

export async function load({ fetch }) {
	const userLoggedInStatus = async () => {
		const result = await fetch(`${API_URL}/users/me`, {
			method: 'GET',
			credentials: 'include',
			headers: {
				Accept: 'application/json',
				'content-type': 'application/json'
			}
		});
		return result;
	};

	const result = await userLoggedInStatus();

	if (result.status !== 200) throw redirect(303, '/');
	return { result };
}
