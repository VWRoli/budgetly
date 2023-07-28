// See https://kit.svelte.dev/docs/types#app

import type { IUser } from './interfaces/user';

// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			user?: IUser;
		}
		// interface PageData {}
		// interface Platform {}
	}
}

export {};
