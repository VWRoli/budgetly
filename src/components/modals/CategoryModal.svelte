<script lang="ts">
	import ModalWrapper from './ModalWrapper.svelte';
	import STextInput from '../common/STextInput.svelte';

	export let open = false;

	export let toggleOpen = (value: boolean) => {};

	const action = '?/createCategory';
</script>

<ModalWrapper title="Create category" {open} {toggleOpen} {action}>
	<slot>
		<div class=" flex flex-col gap-5">
			<STextInput placeholder="Title" name="title" type="text" />
		</div>
	</slot>
</ModalWrapper>
