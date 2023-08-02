<script lang="ts">
	import { Content, Title } from '@smui/paper';
	import Button, { Label } from '@smui/button';
	import CircularProgress from '@smui/circular-progress';
	import STextInput from '../../../components/common/STextInput.svelte';
	import SToast from '../../../components/common/SToast.svelte';
	import type Snackbar from '@smui/snackbar';
	import { enhance } from '$app/forms';
	import type { ActionData } from './$types';
	import { ToastType } from '../../../utils/enums/toastType.enum';

	export let form: ActionData;

	let isLoading = false;
	let toast: Snackbar;
	let toastType: ToastType;
	let message = '';

	const submitLogin = () => {
		isLoading = true;
		return async ({ result, update }: { result: any; update: any }) => {
			console.log({ result });
			switch (result.type) {
				case 'success':
					await update();
					break;
				case 'failure':
					message = result.data.error;
					toastType = ToastType.ERROR;
					toast.open();
					break;
				default:
					await update();
			}
			isLoading = false;
		};
	};
</script>

<svelte:head>
	<title>Login</title>
</svelte:head>

<Title>Login</Title>
<Content>
	<form
		class="flex flex-col min-w-[516px]"
		method="post"
		use:enhance={submitLogin}
	>
		<STextInput
			placeholder="Email"
			name="email"
			type="email"
			error={form?.error.email}
			disabled={isLoading}
		/>
		<div class="h-4" />
		<STextInput
			placeholder="Password"
			name="password"
			type="password"
			disabled={isLoading}
			error={form?.error.password}
		/>

		<div class="h-4" />
		<Button type="submit" variant="raised" disabled={isLoading}>
			<Label>Login</Label>
		</Button>
		{#if isLoading}
			<div class="flex justify-center mt-4">
				<CircularProgress style="height: 32px; width: 32px;" indeterminate />
			</div>
		{:else}
			<div class="mdc-typography--subtitle1 mt-4">
				Don't have an account yet? <a href="/auth/register">Register</a> here.
			</div>
		{/if}
	</form>
</Content>

<SToast bind:toast {message} {toastType} />
