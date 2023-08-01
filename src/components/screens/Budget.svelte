<script lang="ts">
	import Button, { Label } from '@smui/button';
	import Paper from '@smui/paper';
	import CategoryModal from '../modals/CategoryModal.svelte';
	import BudgetItem from '../budgets/BudgetItem.svelte';
	import { page } from '$app/stores';
	import BudgetModal from '../modals/BudgetModal.svelte';
	import type { ICategory } from '../../interfaces/category';
	import type { IBudget } from '../../interfaces/budget';

	const categories: ICategory[] = $page.data.categories;
	const defaultBudget: IBudget = $page.data.defaultBudget;

	let openCategory = false;
	let openBudget = false;

	function toggleOpenCategory(value: boolean) {
		openCategory = value;
	}

	function toggleOpenBudget(value: boolean) {
		openBudget = value;
	}
</script>

<div class="p-10 h-full">
	<div class="flex justify-end items-center py-5 gap-5">
		<Button
			variant="unelevated"
			disabled={!defaultBudget}
			on:click={() => (openCategory = true)}
		>
			<Label>Create category</Label>
		</Button>
	</div>
	<Paper variant="outlined" color="primary">
		<section class="flex flex-col gap-5 min-h-[500px]">
			{#each categories as category}
				<BudgetItem {category} />
			{:else}
				<div class="flex justify-center items-center flex-col h-[500px]">
					{#if !defaultBudget}
						<div
							class="mdc-typography--headline6 flex justify-center items-center mb-4"
						>
							Create your first budget!
						</div>
						<Button variant="unelevated" on:click={() => (openBudget = true)}>
							<Label>Create Budget</Label>
						</Button>
					{:else}
						<div
							class="mdc-typography--headline6 flex justify-center items-center mb-4"
						>
							Create your first category
						</div>
						<Button
							disabled={!defaultBudget}
							variant="unelevated"
							on:click={() => (openCategory = true)}
						>
							<Label>Create category</Label>
						</Button>
					{/if}
				</div>
			{/each}
		</section>
	</Paper>
</div>
<CategoryModal open={openCategory} toggleOpen={toggleOpenCategory} />
<BudgetModal open={openBudget} toggleOpen={toggleOpenBudget} />
