import type { Handle } from '@sveltejs/kit';
import * as jwt from 'jsonwebtoken';
import { parse } from 'cookie';
import { getUser } from './api/auth';
import type { IUser } from './interfaces/user';

export const handle: Handle = async ({ event, resolve }) => {
	const { headers } = event.request;
	const cookies = parse(headers.get('cookie') ?? '');

	if (cookies.AuthorizationToken) {
		// Remove Bearer prefix
		const token = cookies.AuthorizationToken.split(' ')[1];

		try {
			// verify token
			jwt.verify(token, import.meta.env.VITE_JWT_ACCESS_SECRET);

			const user = await getUser(token);

			const sessionUser: IUser = {
				id: user.id,
				email: user.email,
				defaultBudgetId: user.defaultBudgetId,
				budgetIds: user.budgetIds,
			};
			event.locals.user = sessionUser;
		} catch (error) {
			console.error(error);
		}
	}

	return await resolve(event);
};
