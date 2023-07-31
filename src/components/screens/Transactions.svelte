<script lang="ts">
	import Paper from '@smui/paper';
	import Button, { Label } from '@smui/button';
	import TransactionCard from '../transactions/TransactionCard.svelte';
	import TransactionModal from '../modals/TransactionModal.svelte';
	import TransferModal from '../modals/TransferModal.svelte';

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
	<Paper variant="outlined" color="primary">
		<section class="flex flex-col gap-5 h-full">
			<TransactionCard />
			<TransactionCard />
			<TransactionCard />
			<TransactionCard />
		</section>
	</Paper>
</div>

<TransactionModal open={createTxnOpen} toggleOpen={toggleOpenTxn} />
<TransferModal open={createTransferOpen} toggleOpen={toggleOpenTransfer} />
