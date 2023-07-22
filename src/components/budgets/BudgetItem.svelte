<script lang="ts">
	import Card, { Content } from '@smui/card';
	import List, { Group, Subheader } from '@smui/list';
	import BudgetItemRow from './BudgetItemRow.svelte';
	import BudgetItemHeader from './BudgetItemHeader.svelte';
</script>

<Card variant="outlined">
	<Content>
		<List>
			<div class="flex flex-col">
				<BudgetItemHeader />
				<BudgetItemRow />
				<BudgetItemRow />
			</div>
		</List>
	</Content>
</Card>
