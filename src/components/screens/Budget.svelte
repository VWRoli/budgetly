<script lang="ts">
	import Button, { Label } from '@smui/button';
	import Paper from '@smui/paper';
	import CategoryModal from '../modals/CategoryModal.svelte';
	import BudgetItem from '../budgets/BudgetItem.svelte';
	import { page } from '$app/stores';

	const categories = $page.data.categories;

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
		<section class="flex flex-col gap-5 min-h-[500px]">
			{#each categories as category}
				<BudgetItem {category} />
			{:else}
				<div class="flex justify-center items-center flex-col h-[500px]">
					<div
						class="mdc-typography--headline6 flex justify-center items-center mb-4"
					>
						No items in this list
					</div>
					<Button variant="unelevated" on:click={() => (open = true)}>
						<Label>Create category</Label>
					</Button>
				</div>
			{/each}
		</section>
	</Paper>
</div>
<CategoryModal {open} {toggleOpen} />
