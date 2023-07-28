<script lang="ts">
	import { Content, Title } from '@smui/paper';
	import Button, { Label } from '@smui/button';
	import CircularProgress from '@smui/circular-progress';
	import CustomTextInput from '../../../components/common/CustomTextInput.svelte';
	import { loginSchema } from '../../../utils/validationSchemas';
	import { validateForm } from '../../../utils/helpers';
	import Toast from '../../../components/common/Toast.svelte';
	import type Snackbar from '@smui/snackbar';
	import { login } from '../../../api/auth';

	const formData = {
		email: '',
		password: ''
	};
	let errors: any = {};
	let isLoading = false;
	let toast: Snackbar;
	let errorMessage = '';

	const handleSubmit = async () => {
		isLoading = true;
		try {
			errors = await validateForm(loginSchema, formData);
			await login(formData);
			window.location.href = '/dashboard';
		} catch (error: any) {
			errorMessage = error.message;
			toast.open();
		}
		isLoading = false;
	};
</script>

<svelte:head>
	<title>Login</title>
</svelte:head>

<Title>Login</Title>
<Content>
	<form class="flex flex-col">
		<CustomTextInput
			bind:value={formData.email}
			label="Email"
			icon="email"
			error={errors.email}
			disabled={isLoading}
			helperText="Please enter a valid email address"
		/>
		<div class="h-4" />
		<CustomTextInput
			bind:value={formData.password}
			label="Password"
			icon="password"
			type="password"
			disabled={isLoading}
			error={errors.password}
			helperText="Must contain one uppercase, one lowercase, one number and one special character"
		/>

		<div class="h-4" />
		<Button on:click={handleSubmit} variant="raised" disabled={isLoading}>
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
