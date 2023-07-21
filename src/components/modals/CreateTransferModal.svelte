<script lang="ts">
	import Select, { Option } from '@smui/select';
	import Textfield from '@smui/textfield';
	import { DateInput } from 'date-picker-svelte';
	import { accounts } from '../../data/accounts';
	import ModalWrapper from './ModalWrapper.svelte';

	export let open = false;

	const transfer = {
		date: new Date(),
		fromAccountId: 0,
		toAccountId: 0,
		inflow: 0,
		outflow: 0
	};

	export let toggleOpen = (value: boolean) => {};
	const handleCreate = () => {
		console.log(transfer);
		toggleOpen(false);
	};
</script>

<ModalWrapper title="Create transfer" {open} {handleCreate} {toggleOpen}>
	<div class="h-96 flex flex-col gap-5">
		<div>
			<Select variant="filled" label="from Account" bind:value={transfer.fromAccountId}>
				<Option value="" />
				{#each accounts as account}
					<Option value={account.id}>{account.name}</Option>
				{/each}
			</Select>
			<Select variant="filled" label="to Account" bind:value={transfer.toAccountId}>
				<Option value="" />
				{#each accounts as account}
					<Option value={account.id}>{account.name}</Option>
				{/each}
			</Select>
		</div>
		<div>
			<Textfield variant="filled" bind:value={transfer.inflow} label="Inflow" />
			<Textfield variant="filled" bind:value={transfer.outflow} label="Outlfow" />
		</div>
		<DateInput bind:value={transfer.date} />
	</div>
</ModalWrapper>
