<script lang="ts">
	import Paper from '@smui/paper';
	import Button, { Label } from '@smui/button';
	import TransactionCard from '../transactions/TransactionCard.svelte';
	import AddTransactionModal from '../transactions/AddTransactionModal.svelte';
	import AddTransferModal from '../transactions/AddTransferModal.svelte';

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

<AddTransactionModal open={addTxnOpen} toggleOpen={toggleOpenTxn} />
<AddTransferModal open={addTransferOpen} toggleOpen={toggleOpenTransfer} />
