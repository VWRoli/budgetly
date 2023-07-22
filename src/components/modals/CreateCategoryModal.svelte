<script lang="ts">
	import Textfield from '@smui/textfield';
	import type { ICategory } from '../../interfaces/category';
	import ModalWrapper from './ModalWrapper.svelte';

	export let open = false;

	export let toggleOpen = (value: boolean) => {};

	const category: ICategory = {
		title: '',
		budgetId: 1,
		balance: 0,
		budgeted: 0,
		outflows: 0
	};
	const handleCreate = () => {
		console.log(category);
		toggleOpen(false);
	};
</script>

<ModalWrapper title="Create category" {open} {handleCreate} {toggleOpen}>
	<slot>
		<div class=" flex flex-col gap-5">
			<Textfield variant="outlined" bind:value={category.title} label="Name" />
		</div>
	</slot>
</ModalWrapper>
