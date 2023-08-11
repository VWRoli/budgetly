<script lang="ts">
	import Paper from '@smui/paper';
	import Button, { Label } from '@smui/button';
	import TransactionCard from '../../../components/transactions/TransactionCard.svelte';
	import TransactionModal from '../../../components/modals/TransactionModal.svelte';
	import TransferModal from '../../../components/modals/TransferModal.svelte';
	import { page } from '$app/stores';
	import type { IBudget } from '../../../interfaces/budget';
	import type { ITransaction } from '../../../interfaces/transaction';
	import type { ICategory } from '../../../interfaces/category';
	import type { IAccount } from '../../../interfaces/account';

	const accounts: IAccount[] = $page.data.accounts;
	const categories: ICategory[] = $page.data.categories;
	const transactions: ITransaction[] = $page.data.transactions;
	const defaultBudget: IBudget = $page.data.defaultBudget;

	const ableToCreateTransaction =
		accounts.length && categories.length ? true : false;

	let createTxnOpen = false;
	let createTransferOpen = false;

	function toggleOpenTxn(value: boolean) {
		createTxnOpen = value;
	}
	function toggleOpenTransfer(value: boolean) {
		createTransferOpen = value;
	}
</script>

<div class="p-10 h-full">
	<div class="flex justify-end items-center py-5 gap-5">
		<Button
			variant="outlined"
			disabled={!ableToCreateTransaction}
			on:click={() => (createTransferOpen = true)}
		>
			<Label>Create transfer</Label>
		</Button>
		<Button
			variant="unelevated"
			disabled={!ableToCreateTransaction}
			on:click={() => (createTxnOpen = true)}
		>
			<Label>Create Transaction</Label>
		</Button>
	</div>
	<Paper
		class="no-scrollbar overflow-y-auto max-h-[80%]"
		variant="outlined"
		color="primary"
	>
		<section class="flex flex-col gap-5 h-full">
			{#each transactions as transaction}
				<TransactionCard {transaction} />
			{:else}
				<div class="flex justify-center items-center flex-col h-[500px]">
					<div
						class="mdc-typography--headline6 flex justify-center items-center mb-4"
					>
						No transactions yet.
					</div>
					<div
						class="mdc-typography--subtitle1 flex justify-center items-center mb-4"
					>
						You need to create an Account, a Category and a SubCategory to be
						able to create a transaction.
					</div>

					<Button
						variant="unelevated"
						disabled={!ableToCreateTransaction}
						on:click={() => (createTxnOpen = true)}
					>
						<Label>Create Transaction</Label>
					</Button>
				</div>{/each}
		</section>
	</Paper>
</div>

<TransactionModal open={createTxnOpen} toggleOpen={toggleOpenTxn} />
<TransferModal open={createTransferOpen} toggleOpen={toggleOpenTransfer} />
