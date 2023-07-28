<script lang="ts">
	import { Content, Title } from '@smui/paper';
	import Button, { Label } from '@smui/button';
	import CircularProgress from '@smui/circular-progress';
	import { signupSchema } from '../../../utils/validationSchemas';
	import CustomTextInput from '../../../components/common/CustomTextInput.svelte';
	import { validateForm } from '../../../utils/helpers';
	import type { IRegisterUser } from '../../../interfaces/registerUser';
	import { register } from '../../../api/auth';
	import Toast from '../../../components/common/Toast.svelte';
	import type Snackbar from '@smui/snackbar';

	const formData: IRegisterUser = {
		email: '',
		password: '',
		confirmPassword: ''
	};
	let errors: any = {};
	let isLoading = false;
	let toast: Snackbar;
	let errorMessage = '';

	const handleSubmit = async () => {
		isLoading = true;
		try {
			errors = await validateForm(signupSchema, formData);
			await register(formData);
			window.location.href = '/dashboard';
		} catch (error: any) {
			errorMessage = error.message;
			toast.open();
		}
		isLoading = false;
	};
</script>

<svelte:head>
	<title>Register</title>
</svelte:head>

<Title>Register</Title>
<Content>
	<form class="flex flex-col" on:submit|preventDefault={handleSubmit}>
		<CustomTextInput
			bind:value={formData.email}
			label="Email"
			icon="email"
			disabled={isLoading}
			error={errors.email}
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
		<CustomTextInput
			bind:value={formData.confirmPassword}
			label="Confirm Password"
			icon="password"
			type="password"
			disabled={isLoading}
			error={errors.confirmPassword}
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
