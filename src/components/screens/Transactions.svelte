<script lang="ts">
	import Paper from '@smui/paper';
	import Button, { Label } from '@smui/button';
	import TransactionCard from '../TransactionCard.svelte';
</script>

<div class="transaction-container">
	<div class="transaction-btn-container">
		<Button variant="outlined">
			<Label>Add transfer</Label>
		</Button>
		<Button variant="unelevated">
			<Label>Add New Transaction</Label>
		</Button>
	</div>
	<Paper variant="outlined" color="primary">
		<div style="display: flex; flex-direction: column; gap: 20px;">
			<TransactionCard />
			<TransactionCard />
			<TransactionCard />
			<TransactionCard />
		</div>
	</Paper>
</div>

<style lang="scss">
	.transaction-container {
		padding: 50px;
	}
	.transaction-btn-container {
		display: flex;
		align-items: center;
		justify-content: flex-end;
		gap: 24px;
		padding: 24px 0;
	}
</style>
