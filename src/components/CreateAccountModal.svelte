<script lang="ts">
	import Button, { Label } from '@smui/button';
	import Dialog, { Title, Content, Actions } from '@smui/dialog';
	import Textfield from '@smui/textfield';
	import type { IAccount } from '../interfaces/account';

	export let open = false;

	export let toggleOpen = (value: boolean) => {};

	const account: IAccount = {
		name: '',
		budgetId: 1,
		balance: 0
	};
	const handleCreate = () => {
		console.log(account);
		toggleOpen(false);
	};
</script>

<Dialog
	bind:open
	aria-labelledby="add-transaction-title"
	aria-describedby="add-transaction-content"
>
	<Title id="add-transaction-title">Add account</Title>
	<Content id="add-transaction-content">
		<div class=" flex flex-col gap-5">
			<Textfield variant="filled" bind:value={account.name} label="Name" />
		</div>
	</Content>
	<Actions>
		<Button color="secondary">
			<Label on:click={() => toggleOpen(false)}>Cancel</Label>
		</Button>
		<Button color="primary" variant="unelevated">
			<Label on:click={handleCreate}>Create</Label>
		</Button>
	</Actions>
</Dialog>
