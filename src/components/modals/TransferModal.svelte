<script lang="ts">
	import { DateInput } from 'date-picker-svelte';
	import ModalWrapper from './ModalWrapper.svelte';
	import SSelect from '../common/SSelect.svelte';
	import { page } from '$app/stores';
	import type { IAccount } from '../../interfaces/account';
	import SInput from '../common/SInput.svelte';

	export let open = false;
	let selectedFromAccount: number;
	const fromAccountOptions = $page.data.accounts.map((c: IAccount) => ({
		id: `${c.id}`,
		value: c.name,
	}));

	$: toAccountOptions = $page.data.accounts
		.filter((el: IAccount) => el.id !== +$page.data.accountId)
		.filter((el: IAccount) =>
			!$page.data.accountId ? el.id !== +selectedFromAccount : el
		)
		.map((c: IAccount) => ({
			id: c.id,
			value: c.name,
		}));
	let date: Date;

	export let toggleOpen = (value: boolean) => {};

	const setValue = (id: number) => {
		selectedFromAccount = id;
	};

	const action = '?/createTransfer';
</script>

<ModalWrapper title="Create transfer" {open} {toggleOpen} {action}>
	<div class="h-96 flex flex-col gap-5">
		<SSelect
			placeholder="From Account"
			options={fromAccountOptions}
			name="fromAccount"
			value={$page.data.accountId || ''}
			changeHandler={setValue}
		/>
		{selectedFromAccount}
		<SSelect
			placeholder="To Account"
			options={toAccountOptions}
			name="toAccount"
		/>
		<div class="flex gap-4">
			<SInput placeholder="Inflow" name="inflow" type="number" />
			<SInput placeholder="Outlfow" name="outflow" type="number" />
		</div>
		<DateInput bind:value={date} />
		<input type="text" name="date" bind:value={date} class="hidden" />
	</div>
</ModalWrapper>
