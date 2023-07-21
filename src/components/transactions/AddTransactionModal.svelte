<script lang="ts">
	import Button, { Label } from '@smui/button';
	import Dialog, { Title, Content, Actions } from '@smui/dialog';
	import Select, { Option } from '@smui/select';
	import Autocomplete from '@smui-extra/autocomplete';
	import Textfield from '@smui/textfield';
	import type { ITransaction } from '../../interfaces/transaction';
	import { DateInput } from 'date-picker-svelte';

	export let open = false;

	const transaction: ITransaction = {
		payee: '',
		accountId: 0,
		categoryId: 0,
		subCategoryId: 0,
		date: new Date(),
		inflow: null,
		outlfow: null
	};

	export let toggleOpen = (value: boolean) => {};
	const payees = ['Apple', 'Orange', 'Banana', 'Mango'];
	const accounts = [
		{ id: 1, name: 'Bank' },
		{ id: 2, name: 'Wallet' },
		{ id: 3, name: 'Cash' }
	];
	const categories = [
		{ id: 1, name: 'Expenses' },
		{ id: 2, name: 'Savings' },
		{ id: 3, name: 'Funds' }
	];
	const subCategories = [
		{ id: 1, name: 'Car' },
		{ id: 2, name: 'Holiday' },
		{ id: 3, name: 'Groceries' }
	];

	const handleCreate = () => {
		console.log(transaction);
		toggleOpen(false);
	};
</script>

<Dialog
	bind:open
	aria-labelledby="add-transaction-title"
	aria-describedby="add-transaction-content"
>
	<Title id="add-transaction-title">Add transaction</Title>
	<Content id="add-transaction-content">
		<div class="h-96 flex flex-col gap-5">
			<Select variant="filled" label="Account" bind:value={transaction.accountId}>
				<Option value="" />
				{#each accounts as account}
					<Option value={account.id}>{account.name}</Option>
				{/each}
			</Select>

			<Autocomplete
				options={payees}
				bind:value={transaction.payee}
				label="Payee"
				textfield$variant="filled"
			/>
			<div>
				<Textfield variant="filled" bind:value={transaction.inflow} label="Inflow" />
				<Textfield variant="filled" bind:value={transaction.outlfow} label="Outlfow" />
			</div>
			<div>
				<Select variant="filled" bind:value={transaction.categoryId} label="Fruit">
					<Option value="" />
					{#each categories as category}
						<Option value={category.id}>{category.name}</Option>
					{/each}
				</Select>
				<Select variant="filled" bind:value={transaction.subCategoryId} label="Fruit">
					<Option value="" />
					{#each subCategories as subCategory}
						<Option value={subCategory.id}>{subCategory.name}</Option>
					{/each}
				</Select>
			</div>
			<DateInput bind:value={transaction.date} />
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
