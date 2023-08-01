<script lang="ts">
	import { DateInput } from 'date-picker-svelte';
	import ModalWrapper from './ModalWrapper.svelte';
	import SSelect from '../common/SSelect.svelte';
	import { page } from '$app/stores';
	import type { IAccount } from '../../interfaces/account';
	import STextInput from '../common/STextInput.svelte';

	export let open = false;

	const fromAccountOptions = $page.data.accounts.map((c: IAccount) => ({
		id: c.id,
		value: c.name,
	}));
	const toAccountOptions = $page.data.accounts.map((c: IAccount) => ({
		id: c.name,
		value: c.name,
	}));
	let date: Date;

	export let toggleOpen = (value: boolean) => {};

	const action = '?/createTransfer';
</script>

<ModalWrapper title="Create transfer" {open} {toggleOpen} {action}>
	<div class="h-96 flex flex-col gap-5">
		<SSelect
			placeholder="From Account"
			options={fromAccountOptions}
			name="fromAccount"
		/>
		<SSelect
			placeholder="To Account"
			options={toAccountOptions}
			name="toAccount"
		/>
		<div class="flex gap-4">
			<STextInput label="Inflow" name="inflow" type="number" />
			<STextInput label="Outlfow" name="outflow" type="number" />
		</div>
		<DateInput bind:value={date} />
		<input type="text" name="date" bind:value={date} class="hidden" />
	</div>
</ModalWrapper>
