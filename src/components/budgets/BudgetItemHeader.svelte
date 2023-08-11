<script lang="ts">
	import IconButton from '@smui/icon-button';
	import { Item } from '@smui/list';
	import SubCategoryModal from '../modals/SubCategoryModal.svelte';
	import type { ICategory } from '../../interfaces/category';
	import { formatCurrency } from '../../utils/helpers';
	import { page } from '$app/stores';
	import type { IBudget } from '../../interfaces/budget';

	const defaultBudget: IBudget = $page.data.defaultBudget;

	const cellClass = `col-span-3 flex items-center justify-end`;
	let open = false;
	export let category: ICategory;

	function toggleOpen(value: boolean) {
		open = value;
	}
</script>

<Item
	disabled
	style="background-color: #676778; border-radius: 4px; color: white"
>
	<div class="grid grid-cols-12 rounded w-full">
		<div class="col-span-3">
			<div class="mdc-typography--subtitle1 flex items-center">
				{category.title}
				<IconButton
					size="button"
					on:click={() => (open = true)}
					style="color: white"
					class="material-icons">add</IconButton
				>
			</div>
		</div>
		<div class={cellClass}>
			<div class="mdc-typography--subtitle2 text-right">
				<small>Budgeted</small>
				<div>
					{formatCurrency(
						category.budgeted,
						defaultBudget.locale,
						defaultBudget.currency
					)}
				</div>
			</div>
		</div>
		<div class={cellClass}>
			<div class="mdc-typography--subtitle2 text-right">
				<small>Outflows</small>
				<div>
					{category.outflows > 0 ? '-' : ''}{formatCurrency(
						category.outflows,
						defaultBudget.locale,
						defaultBudget.currency
					)}
				</div>
			</div>
		</div>
		<div class={cellClass}>
			<div class="mdc-typography--subtitle2 text-right">
				<small>Balance</small>
				<div>
					{formatCurrency(
						category.balance,
						defaultBudget.locale,
						defaultBudget.currency
					)}
				</div>
			</div>
		</div>
	</div>
</Item>
<SubCategoryModal {open} {toggleOpen} id={category.id} />
