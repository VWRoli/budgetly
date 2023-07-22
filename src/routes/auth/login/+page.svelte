<script lang="ts">
	import Textfield from '@smui/textfield';
	import Icon from '@smui/textfield/icon';
	import { Content, Title } from '@smui/paper';
	import Button, { Label } from '@smui/button';
	let valueA = '';
	let valueB = '';

	function login() {
		window.location.href = '/dashboard';
	}
</script>

<svelte:head>
	<title>Login</title>
</svelte:head>

<Title>Login</Title>
<Content>
	<div class="flex flex-col">
		<Textfield variant="outlined" required bind:value={valueA} label="Email">
			<Icon class="material-icons" slot="leadingIcon">email</Icon>
		</Textfield>
		<div class="h-4" />
		<Textfield variant="outlined" required bind:value={valueB} label="Password">
			<Icon class="material-icons" slot="leadingIcon">password</Icon>
		</Textfield>
		<div class="h-4" />
		<Button on:click={login} variant="raised">
			<Label>Login</Label>
		</Button>
		<div class="mdc-typography--subtitle1 mt-4">
			Don't have an account yet? <a href="/auth/register">Register</a> here.
		</div>
	</div>
</Content>
