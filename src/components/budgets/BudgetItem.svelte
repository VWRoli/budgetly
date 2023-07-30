<script lang="ts">
	import Card, { Content } from '@smui/card';
	import List from '@smui/list';
	import BudgetItemRow from './BudgetItemRow.svelte';
	import BudgetItemHeader from './BudgetItemHeader.svelte';
	import type { ICategory } from '../../interfaces/category';

	export let category: ICategory;
</script>

<Card variant="outlined">
	<Content>
		<List>
			<div class="flex flex-col">
				<BudgetItemHeader {category} />
				<BudgetItemRow />
				<BudgetItemRow />
			</div>
		</List>
	</Content>
</Card>
