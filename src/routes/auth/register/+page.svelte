<script lang="ts">
	import Textfield from '@smui/textfield';
	import Icon from '@smui/textfield/icon';
	import { Content, Title } from '@smui/paper';
	import Button, { Label } from '@smui/button';
	let valueA = '';
	let valueB = '';
</script>

<Title>Register</Title>
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
		<Textfield variant="outlined" bind:value={valueB} label="Confirm Password">
			<Icon class="material-icons" slot="leadingIcon">password</Icon>
		</Textfield>
		<pre class="status" />
		<Button href="/login" variant="raised">
			<Label>Register</Label>
		</Button>
		<div class="mdc-typography--subtitle1">
			You already have an account? <a href="/auth/login">Login</a> here.
		</div>
	</div>
</Content>

<style>
	.form-wrapper {
		display: flex;
		flex-direction: column;
	}
</style>
