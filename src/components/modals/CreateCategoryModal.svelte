<script lang="ts">
	import Button, { Label } from '@smui/button';
	import Dialog, { Title, Content, Actions } from '@smui/dialog';
	import Textfield from '@smui/textfield';
	import type { ICategory } from '../../interfaces/category';

	export let open = false;

	export let toggleOpen = (value: boolean) => {};

	const category: ICategory = {
		title: '',
		budgetId: 1,
		balance: 0,
		budgeted: 0,
		outflows: 0
	};
	const handleCreate = () => {
		console.log(category);
		toggleOpen(false);
	};
</script>

<Dialog
	bind:open
	aria-labelledby="add-transaction-title"
	aria-describedby="add-transaction-content"
>
	<Title id="add-transaction-title">Create category</Title>
	<Content id="add-transaction-content">
		<div class=" flex flex-col gap-5">
			<Textfield variant="filled" bind:value={category.title} label="Name" />
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
