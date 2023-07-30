<script lang="ts">
	import { Item } from '@smui/list';
	import type { ISubCategory } from '../../interfaces/subCategory';
	import { formatCurrency } from '../../utils/helpers';
	import { page } from '$app/stores';
	import type { IBudget } from '../../interfaces/budget';

	const defaultBudget: IBudget = $page.data.defaultBudget;

	export let subCategory: ISubCategory;
</script>

<Item>
	<div class="grid grid-cols-12 w-full">
		<div class="col-span-3">{subCategory.title}</div>
		<div class="col-span-3">
			{formatCurrency(
				subCategory.budgeted,
				defaultBudget.locale,
				defaultBudget.currency
			)}
		</div>
		<div class="col-span-3">
			{formatCurrency(
				subCategory.outflows,
				defaultBudget.locale,
				defaultBudget.currency
			)}
		</div>
		<div class="col-span-3">
			{formatCurrency(
				subCategory.balance,
				defaultBudget.locale,
				defaultBudget.currency
			)}
		</div>
	</div>
</Item>
