<script lang="ts">
	import ModalWrapper from './ModalWrapper.svelte';
	import STextInput from '../common/STextInput.svelte';

	export let open = false;
	export let id: number;

	export let toggleOpen = (value: boolean) => {};
	const action = '?/createSubCategory';
</script>

<ModalWrapper title="Create Subcategory" {open} {toggleOpen} {action}>
	<slot>
		<div class=" flex flex-col gap-5">
			<STextInput label="Title" name="title" type="text" />
			<STextInput
				label="CategoryID"
				name="categoryId"
				type="number"
				bind:value={id}
			/>
		</div>
	</slot>
</ModalWrapper>
