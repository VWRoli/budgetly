<script lang="ts">
	import Select, { Option } from '@smui/select';
	import Autocomplete from '@smui-extra/autocomplete';
	import Textfield from '@smui/textfield';
	import type { ITransaction } from '../../interfaces/transaction';
	import { DateInput } from 'date-picker-svelte';
	import { accounts } from '../../data/accounts';
	import ModalWrapper from './ModalWrapper.svelte';

	export let open = false;

	const transaction: ITransaction = {
		payee: '',
		accountId: 0,
		categoryId: 0,
		subCategoryId: 0,
		date: new Date(),
		inflow: null,
		outlfow: null,
	};

	export let toggleOpen = (value: boolean) => {};
	const payees = ['Apple', 'Orange', 'Banana', 'Mango'];

	const action = '?/createTransaction';

	const categories = [
		{ id: 1, name: 'Expenses' },
		{ id: 2, name: 'Savings' },
		{ id: 3, name: 'Funds' },
	];
	const subCategories = [
		{ id: 1, name: 'Car' },
		{ id: 2, name: 'Holiday' },
		{ id: 3, name: 'Groceries' },
	];
</script>

<ModalWrapper title="Create transaction" {open} {toggleOpen} {action}>
	<slot>
		<div class="h-96 flex flex-col gap-5">
			<Select
				variant="outlined"
				label="Account"
				bind:value={transaction.accountId}
			>
				<Option value="" />
				{#each accounts as account}
					<Option value={account.id}>{account.name}</Option>
				{/each}
			</Select>

			<Autocomplete
				options={payees}
				bind:value={transaction.payee}
				label="Payee"
				textfield$variant="outlined"
			/>
			<div>
				<Textfield
					variant="outlined"
					bind:value={transaction.inflow}
					label="Inflow"
				/>
				<Textfield
					variant="outlined"
					bind:value={transaction.outlfow}
					label="Outlfow"
				/>
			</div>
			<div>
				<Select
					variant="outlined"
					bind:value={transaction.categoryId}
					label="Fruit"
				>
					<Option value="" />
					{#each categories as category}
						<Option value={category.id}>{category.name}</Option>
					{/each}
				</Select>
				<Select
					variant="outlined"
					bind:value={transaction.subCategoryId}
					label="Fruit"
				>
					<Option value="" />
					{#each subCategories as subCategory}
						<Option value={subCategory.id}>{subCategory.name}</Option>
					{/each}
				</Select>
			</div>
			<DateInput bind:value={transaction.date} />
		</div>
	</slot>
</ModalWrapper>
