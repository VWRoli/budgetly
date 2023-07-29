<script lang="ts">
	import { Content, Title } from '@smui/paper';
	import Button, { Label } from '@smui/button';
	import CircularProgress from '@smui/circular-progress';
	import CustomTextInput from '../../../components/common/CustomTextInput.svelte';
	import Toast from '../../../components/common/Toast.svelte';
	import type Snackbar from '@smui/snackbar';
	import { enhance } from '$app/forms';
	import type { ActionData } from './$types';

	export let form: ActionData;

	let isLoading = false;
	let toast: Snackbar;
	let errorMessage = '';
</script>

<svelte:head>
	<title>Login</title>
</svelte:head>

<Title>Login</Title>
<Content>
	<form class="flex flex-col" method="post" use:enhance>
		<CustomTextInput
			label="Email"
			name="email"
			icon="email"
			type="email"
			error={form?.error.email}
			disabled={isLoading}
			helperText="Please enter a valid email address"
		/>
		<div class="h-4" />
		<CustomTextInput
			label="Password"
			name="password"
			icon="password"
			type="password"
			disabled={isLoading}
			error={form?.error.password}
			helperText="Must contain one uppercase, one lowercase, one number and one special character"
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

<Toast bind:toast message={errorMessage} />
