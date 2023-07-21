<script lang="ts">
	import Paper from '@smui/paper';
	import Button, { Label } from '@smui/button';
	import TransactionCard from '../transactions/TransactionCard.svelte';
	import CreateTransactionModal from '../modals/CreateTransactionModal.svelte';
	import CreateTransferModal from '../modals/CreateTransferModal.svelte';

	let addTxnOpen = false;
	let addTransferOpen = false;

	function toggleOpenTxn(value: boolean) {
		addTxnOpen = value;
	}
	function toggleOpenTransfer(value: boolean) {
		addTransferOpen = value;
	}
</script>

<div class="p-10 h-full">
	<div class="flex justify-end items-center py-5 gap-5">
		<Button variant="outlined" on:click={() => (addTransferOpen = true)}>
			<Label>Add transfer</Label>
		</Button>
		<Button variant="unelevated" on:click={() => (addTxnOpen = true)}>
			<Label>Add New Transaction</Label>
		</Button>
	</div>
	<Paper variant="outlined" color="primary">
		<div class="flex flex-col gap-5 h-full">
			<TransactionCard />
			<TransactionCard />
			<TransactionCard />
			<TransactionCard />
		</div>
	</Paper>
</div>

<CreateTransactionModal open={addTxnOpen} toggleOpen={toggleOpenTxn} />
<CreateTransferModal open={addTransferOpen} toggleOpen={toggleOpenTransfer} />
