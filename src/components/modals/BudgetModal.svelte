<script lang="ts">
	import ModalWrapper from './ModalWrapper.svelte';
	import { ECurrency } from '../../utils/enums/currency.enum';
	import STextInput from '../common/STextInput.svelte';
	import SSelect from '../common/SSelect.svelte';
	import { page } from '$app/stores';
	import type { IBudget } from '../../interfaces/budget';

	const budgetCurrencies: string[] = $page.data.budgets.map(
		(budget: IBudget) => budget.currency
	);
	export let open = false;

	export let toggleOpen = (value: boolean) => {};

	const action = '?/createBudget';

	const currencyOptions = [
		ECurrency.EUR as string,
		ECurrency.USD as string,
		ECurrency.GBP as string,
		ECurrency.HUF as string,
	];
	//remove alredy existing currency options
	const filteredCurrencyOptions = currencyOptions.filter(
		(x) => !budgetCurrencies.includes(x)
	);
</script>

<ModalWrapper title="Create budget" {open} {toggleOpen} {action}>
	<slot>
		<div class="flex flex-col gap-5 min-w-[378px] min-h-[178px] pt-4">
			<STextInput placeholder="Name" name="name" type="text" />
			<SSelect
				placeholder="Currency"
				options={filteredCurrencyOptions}
				name="currency"
			/>
		</div>
	</slot>
</ModalWrapper>
