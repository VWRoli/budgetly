<script lang="ts">
	import Textfield from '@smui/textfield';
	import Icon from '@smui/textfield/icon';
	import { Content, Title } from '@smui/paper';
	import Button, { Label } from '@smui/button';

	const formData = {
		email: '',
		password: '',
		confirmPassword: ''
	};
	let errors = {};

	const handleSubmit = async () => {
		console.log(formData);
		// try {
		// 	await schema.validate(values, { abortEarly: false });
		// 	alert(JSON.stringify(values, null, 2));
		// 	errors = {};
		// } catch (err) {
		// 	errors = err.inner.reduce((acc, err) => {
		// 		return { ...acc, [err.path]: err.message };
		// 	}, {});
		// }
	};
</script>

<svelte:head>
	<title>Register</title>
</svelte:head>

<Title>Register</Title>
<Content>
	<form class="flex flex-col">
		<Textfield
			invalid
			variant="outlined"
			type="email"
			required
			bind:value={formData.email}
			label="Email"
		>
			<Icon class="material-icons" slot="leadingIcon">email</Icon>
		</Textfield>
		<div class="h-4" />
		<Textfield
			type="password"
			variant="outlined"
			required
			bind:value={formData.password}
			label="Password"
		>
			<Icon class="material-icons" slot="leadingIcon">password</Icon>
		</Textfield>
		<div class="h-4" />
		<Textfield
			type="password"
			variant="outlined"
			required
			bind:value={formData.confirmPassword}
			label="Confirm Password"
		>
			<Icon class="material-icons" slot="leadingIcon">password</Icon>
		</Textfield>
		<div class="h-4" />
		<Button on:click={handleSubmit} variant="raised">
			<Label>Register</Label>
		</Button>
		<div class="mdc-typography--subtitle1 mt-4">
			You already have an account? <a href="/auth/login">Login</a> here.
		</div>
	</form>
</Content>
