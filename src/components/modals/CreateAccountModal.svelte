<script lang="ts">
	import ModalWrapper from './ModalWrapper.svelte';
	import CustomTextInput from '../common/CustomTextInput.svelte';

	export let open = false;

	export let toggleOpen = (value: boolean) => {};

	const action = '?/createAccount';
</script>

<ModalWrapper title="Create account" {open} {toggleOpen} {action}>
	<div class=" flex flex-col gap-5">
		<CustomTextInput label="Name" name="name" type="text" />
	</div>
</ModalWrapper>
