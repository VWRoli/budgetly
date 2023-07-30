<script lang="ts">
	import IconButton from '@smui/icon-button';
	import { Item } from '@smui/list';
	import CreateSubCategoryModal from '../modals/CreateSubCategoryModal.svelte';
	import type { ICategory } from '../../interfaces/category';
	import { formatCurrency } from '../../utils/helpers';
	import { page } from '$app/stores';
	import type { IBudget } from '../../interfaces/budget';

	const defaultBudget: IBudget = $page.data.defaultBudget;

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
			<div class="mdc-typography--headline6">
				{category.title}
				<IconButton
					size="button"
					on:click={() => (open = true)}
					style="color: white"
					class="material-icons">add</IconButton
				>
			</div>
		</div>
		<div class="col-span-3">
			<div class="mdc-typography--headline6">
				{formatCurrency(
					category.budgeted,
					defaultBudget.locale,
					defaultBudget.currency
				)}
			</div>
		</div>
		<div class="col-span-3">
			<div class="mdc-typography--headline6">
				{formatCurrency(
					category.outflows,
					defaultBudget.locale,
					defaultBudget.currency
				)}
			</div>
		</div>
		<div class="col-span-3">
			<div class="mdc-typography--headline6">
				{formatCurrency(
					category.balance,
					defaultBudget.locale,
					defaultBudget.currency
				)}
			</div>
		</div>
	</div>
</Item>
<CreateSubCategoryModal {open} {toggleOpen} id={category.id} />
