<script lang="ts">
	import Textfield from '@smui/textfield';
	import type { IAccount } from '../../interfaces/account';
	import ModalWrapper from './ModalWrapper.svelte';

	export let open = false;

	export let toggleOpen = (value: boolean) => {};

	const account: IAccount = {
		name: '',
		budgetId: 1,
		balance: 0
	};
	const handleCreate = () => {
		console.log(account);
		toggleOpen(false);
	};
</script>

<ModalWrapper title="Create account" {open} {handleCreate} {toggleOpen}>
	<div class=" flex flex-col gap-5">
		<Textfield variant="filled" bind:value={account.name} label="Name" />
	</div>
</ModalWrapper>
