<script lang="ts">
	import Paper from '@smui/paper';
	import Button, { Label } from '@smui/button';
	import TransactionCard from '../TransactionCard.svelte';
</script>

<div class="p-10 h-full">
	<div class="flex justify-end items-center py-5 gap-5">
		<Button variant="outlined">
			<Label>Add transfer</Label>
		</Button>
		<Button variant="unelevated">
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
