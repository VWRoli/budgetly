<script lang="ts">
	import Paper from '@smui/paper';
	import Button, { Label } from '@smui/button';
	import TransactionCard from '../transactions/TransactionCard.svelte';
	import TransactionModal from '../modals/TransactionModal.svelte';
	import TransferModal from '../modals/TransferModal.svelte';
	import { page } from '$app/stores';

	const transactions = $page.data.transactions;

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
		<Button variant="outlined" on:click={() => (createTransferOpen = true)}>
			<Label>Create transfer</Label>
		</Button>
		<Button variant="unelevated" on:click={() => (createTxnOpen = true)}>
			<Label>Create Transaction</Label>
		</Button>
	</div>
	<Paper
		style="overflow-y: scroll; max-height: 80%"
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
					<Button variant="unelevated" on:click={() => (createTxnOpen = true)}>
						<Label>Create Transaction</Label>
					</Button>
				</div>{/each}
		</section>
	</Paper>
</div>

<TransactionModal open={createTxnOpen} toggleOpen={toggleOpenTxn} />
<TransferModal open={createTransferOpen} toggleOpen={toggleOpenTransfer} />
