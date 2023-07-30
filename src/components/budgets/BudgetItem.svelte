<script lang="ts">
	import Card, { Content } from '@smui/card';
	import List from '@smui/list';
	import BudgetItemRow from './BudgetItemRow.svelte';
	import BudgetItemHeader from './BudgetItemHeader.svelte';
	import type { ICategory } from '../../interfaces/category';

	export let category: ICategory;
	const subCategories = category.subCategories;
</script>

<Card variant="outlined">
	<Content>
		<List>
			<div class="flex flex-col">
				<BudgetItemHeader {category} />
				{#each subCategories as subCategory}
					<BudgetItemRow {subCategory} />
				{:else}
					<div
						class="mdc-typography--subtitle1 flex justify-center items-center my-4"
					>
						No items in this category
					</div>
				{/each}
			</div>
		</List>
	</Content>
</Card>
