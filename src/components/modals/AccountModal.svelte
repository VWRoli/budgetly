<script lang="ts">
	import ModalWrapper from './ModalWrapper.svelte';
	import STextInput from '../common/STextInput.svelte';

	export let open = false;

	export let toggleOpen = (value: boolean) => {};

	const action = '?/createAccount';
</script>

<ModalWrapper title="Create account" {open} {toggleOpen} {action}>
	<div class=" flex flex-col gap-5">
		<STextInput placeholder="Name" name="name" type="text" />
	</div>
</ModalWrapper>
