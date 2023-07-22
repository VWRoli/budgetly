<script lang="ts">
	import Button, { Label } from '@smui/button';
	import Paper from '@smui/paper';
	import CreateCategoryModal from '../modals/CreateCategoryModal.svelte';
	import BudgetItem from '../budgets/BudgetItem.svelte';

	let open = false;

	function toggleOpen(value: boolean) {
		open = value;
	}
</script>

<div class="p-10 h-full">
	<div class="flex justify-end items-center py-5 gap-5">
		<Button variant="unelevated" on:click={() => (open = true)}>
			<Label>Create category</Label>
		</Button>
	</div>
	<Paper variant="outlined" color="primary">
		<div class="flex flex-col gap-5">
			<BudgetItem />
			<BudgetItem />
			<BudgetItem />
			<BudgetItem />
		</div>
	</Paper>
</div>
<CreateCategoryModal {open} {toggleOpen} />
