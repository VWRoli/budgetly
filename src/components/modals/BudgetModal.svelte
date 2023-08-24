<script lang="ts">
	import ModalWrapper from './ModalWrapper.svelte';
	import STextInput from '../common/STextInput.svelte';
	import SSelect from '../common/SSelect.svelte';
	import { page } from '$app/stores';
	import { ECurrency } from '$lib/enums/currency.enum';
	import type { IBudget } from '../../interfaces/budget';
	import SToast from '../common/SToast.svelte';
	import type { ActionResult } from '@sveltejs/kit';
	import { ToastType } from '$lib/enums/toastType.enum';
	import type Snackbar from '@smui/snackbar';

	const budgetCurrencies: string[] = $page.data.budgets.map(
		(budget: IBudget) => budget.currency
	);
	export let open = false;

	export let toggleOpen = (value: boolean) => {};

	const action = '/dashboard/budget?/createBudget';

	const currencyOptions = [
		ECurrency.EUR as string,
		ECurrency.USD as string,
		ECurrency.GBP as string,
		ECurrency.HUF as string,
	];

	let toast: Snackbar;
	let message = '';
	let toastType: ToastType;

	//remove alredy existing currency options
	const filteredCurrencyOptions = currencyOptions.filter(
		(x) => !budgetCurrencies.includes(x)
	);

	const handleSubmit = () => {
		return async ({
			result,
			update,
		}: {
			result: ActionResult;
			update: () => Promise<void>;
		}) => {
			switch (result.type) {
				case 'success':
					message = 'Budget successfully created';
					toastType = ToastType.SUCCESS;
					toast.open();
					await update();
					break;
				case 'failure':
					Object.values(result.data?.error).forEach((value) => {
						message = value as string;
						toastType = ToastType.ERROR;
						toast.open();
					});
					break;
				default:
					await update();
			}
		};
	};
</script>

<ModalWrapper title="Create budget" {open} {toggleOpen} {action} {handleSubmit}>
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

<SToast bind:toast {message} {toastType} />
