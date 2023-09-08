<script lang="ts">
	import { Item } from '@smui/list';
	import type { ISubCategory } from '../../interfaces/subCategory';
	import { formatCurrency } from '$lib/utils/helpers';
	import { page } from '$app/stores';
	import type { IBudget } from '../../interfaces/budget';
	import UpdateBudgetedModal from '../modals/UpdateBudgetedModal.svelte';

	$: defaultBudget = $page.data.defaultBudget as IBudget;
	const cellClass = `col-span-3 flex items-center justify-end`;
	export let subCategory: ISubCategory;

	let open = false;

	function toggleOpen(value: boolean) {
		open = value;
	}
</script>

<Item class="border border-slate-200 h-auto rounded">
	<div class="grid grid-cols-12 w-full">
		<div class="col-span-3">{subCategory.title}</div>
		<div class={cellClass}>
			<div
				role="button"
				class="mdc-typography--subtitle2 border border-slate-300 px-4 hover:bg-slate-400"
				on:click={() => toggleOpen(true)}
				on:keydown={() => toggleOpen(true)}
				tabindex="0"
			>
				{formatCurrency(
					subCategory.budgeted,
					defaultBudget.locale,
					defaultBudget.currency
				)}
			</div>
		</div>
		<div class={cellClass}>
			<div class="mdc-typography--subtitle2">
				{subCategory.outflows > 0 ? '-' : ''}{formatCurrency(
					subCategory.outflows,
					defaultBudget.locale,
					defaultBudget.currency
				)}
			</div>
		</div>
		<div class={cellClass}>
			<div class="mdc-typography--subtitle2">
				{formatCurrency(
					subCategory.balance,
					defaultBudget.locale,
					defaultBudget.currency
				)}
			</div>
		</div>
	</div>
</Item>

<UpdateBudgetedModal
	{open}
	{toggleOpen}
	id={subCategory.id}
	value={subCategory.budgeted}
/>
