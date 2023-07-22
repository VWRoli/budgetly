<script lang="ts">
	import { Content, Title } from '@smui/paper';
	import Button, { Label } from '@smui/button';
	import { signupSchema } from '../../../utils/validationSchemas';
	import CustomTextInput from '../../../components/common/CustomTextInput.svelte';
	import { formValidation } from '../../../utils/helpers';

	const formData = {
		email: '',
		password: '',
		confirmPassword: ''
	};
	let errors: any = {};

	const handleSubmit = async () => {
		errors = formValidation(signupSchema, formData);

		console.log(errors);
		console.log(formData);
	};
</script>

<svelte:head>
	<title>Register</title>
</svelte:head>

<Title>Register</Title>
<Content>
	<form class="flex flex-col">
		<CustomTextInput
			value={formData.email}
			label="Email"
			icon="email"
			error={errors.email}
			helperText="Please enter a valid email address"
		/>

		<div class="h-4" />
		<CustomTextInput
			value={formData.password}
			label="Password"
			icon="password"
			error={errors.password}
			helperText="Must contain one uppercase, one lowercase, one number and one special character"
		/>

		<div class="h-4" />
		<CustomTextInput
			value={formData.confirmPassword}
			label="Confirm Password"
			icon="password"
			error={errors.confirmPassword}
			helperText="Confirm your password"
		/>
		<div class="h-4" />

		<Button on:click={handleSubmit} variant="raised">
			<Label>Register</Label>
		</Button>
		<div class="mdc-typography--subtitle1 mt-4">
			You already have an account? <a href="/auth/login">Login</a> here.
		</div>
	</form>
</Content>
