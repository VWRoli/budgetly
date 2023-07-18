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

<Title>Login</Title>
<Content>
	<div class="form-wrapper">
		<Textfield variant="outlined" bind:value={valueA} label="Email">
			<Icon class="material-icons" slot="leadingIcon">email</Icon>
		</Textfield>
		<pre class="status" />
		<Textfield variant="outlined" bind:value={valueB} label="Password">
			<Icon class="material-icons" slot="leadingIcon">password</Icon>
		</Textfield>
		<pre class="status" />
		<pre class="status" />
		<Button on:click={login} variant="raised">
			<Label>Login</Label>
		</Button>
		<div class="mdc-typography--subtitle1">
			Don't have an account yet? <a href="/auth/login">Register</a> here.
		</div>
	</div>
</Content>

<style>
	.form-wrapper {
		display: flex;
		flex-direction: column;
	}
</style>
