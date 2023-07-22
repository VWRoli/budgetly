<script lang="ts">
	import Textfield from '@smui/textfield';
	import Icon from '@smui/textfield/icon';
	import { Content, Title } from '@smui/paper';
	import Button, { Label } from '@smui/button';
	let valueA = '';
	let valueB = '';
</script>

<svelte:head>
	<title>Register</title>
</svelte:head>

<Title>Register</Title>
<Content>
	<form class="flex flex-col">
		<Textfield variant="outlined" bind:value={valueA} label="Email">
			<Icon class="material-icons" slot="leadingIcon">email</Icon>
		</Textfield>
		<div class="h-4" />
		<Textfield variant="outlined" bind:value={valueB} label="Password">
			<Icon class="material-icons" slot="leadingIcon">password</Icon>
		</Textfield>
		<div class="h-4" />
		<Textfield variant="outlined" bind:value={valueB} label="Confirm Password">
			<Icon class="material-icons" slot="leadingIcon">password</Icon>
		</Textfield>
		<div class="h-4" />
		<Button variant="raised">
			<Label>Register</Label>
		</Button>
		<div class="mdc-typography--subtitle1 mt-4">
			You already have an account? <a href="/auth/login">Login</a> here.
		</div>
	</form>
</Content>
