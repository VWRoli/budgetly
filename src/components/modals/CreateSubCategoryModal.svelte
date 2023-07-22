<script lang="ts">
	import Textfield from '@smui/textfield';
	import type { ISubCategory } from '../../interfaces/subCategory';
	import ModalWrapper from './ModalWrapper.svelte';

	export let open = false;

	export let toggleOpen = (value: boolean) => {};

	const subCategory: ISubCategory = {
		title: '',
		budgetId: 1,
		balance: 0,
		budgeted: 0,
		outflows: 0
	};
	const handleCreate = () => {
		console.log(subCategory);
		toggleOpen(false);
	};
</script>

<ModalWrapper title="Create Subcategory" {open} {handleCreate} {toggleOpen}>
	<slot>
		<div class=" flex flex-col gap-5">
			<Textfield variant="outlined" bind:value={subCategory.title} label="Name" />
		</div>
	</slot>
</ModalWrapper>
