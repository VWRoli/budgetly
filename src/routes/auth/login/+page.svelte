<script lang="ts">
	import { Content, Title } from '@smui/paper';
	import Button, { Label } from '@smui/button';
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
	let toast: Snackbar;
	let errorMessage = '';

	const handleSubmit = async () => {
		try {
			errors = await validateForm(loginSchema, formData);
			await login(formData);
			window.location.href = '/dashboard';
		} catch (error: any) {
			errorMessage = error.message;
			toast.open();
		}
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
			helperText="Please enter a valid email address"
		/>
		<div class="h-4" />
		<CustomTextInput
			bind:value={formData.password}
			label="Password"
			icon="password"
			type="password"
			error={errors.password}
			helperText="Must contain one uppercase, one lowercase, one number and one special character"
		/>

		<div class="h-4" />
		<Button on:click={handleSubmit} variant="raised">
			<Label>Login</Label>
		</Button>
		<div class="mdc-typography--subtitle1 mt-4">
			Don't have an account yet? <a href="/auth/register">Register</a> here.
		</div>
	</form>
</Content>

<Toast bind:toast message={errorMessage} />
