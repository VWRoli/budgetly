<script lang="ts">
	import { Content, Title } from '@smui/paper';
	import Button, { Label } from '@smui/button';
	import CircularProgress from '@smui/circular-progress';
	import STextInput from '../../../components/common/STextInput.svelte';
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
	<title>Register</title>
</svelte:head>

<Title>Register</Title>
<Content>
	<form class="flex flex-col min-w-[516px]" method="post" use:enhance>
		<STextInput
			placeholder="Email"
			name="email"
			type="email"
			disabled={isLoading}
			error={form?.error.email}
			helperText="Please enter a valid email address"
		/>

		<div class="h-4" />
		<STextInput
			placeholder="Password"
			type="password"
			name="password"
			disabled={isLoading}
			error={form?.error.password}
			helperText="Must contain one uppercase, one lowercase, one number and one special character"
		/>

		<div class="h-4" />
		<STextInput
			placeholder="Confirm Password"
			type="password"
			name="confirmPassword"
			disabled={isLoading}
			error={form?.error.confirmPassword}
			helperText="Confirm your password"
		/>
		<div class="h-4" />

		<Button type="submit" variant="raised" disabled={isLoading}>
			<Label>Register</Label>
		</Button>
		{#if isLoading}
			<div class="flex justify-center mt-4">
				<CircularProgress style="height: 32px; width: 32px;" indeterminate />
			</div>
		{:else}
			<div class="mdc-typography--subtitle1 mt-4">
				You already have an account? <a href="/auth/login">Login</a> here.
			</div>
		{/if}
	</form>
</Content>

<Toast bind:toast message={errorMessage} />
