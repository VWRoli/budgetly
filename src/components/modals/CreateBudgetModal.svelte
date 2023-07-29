<script lang="ts">
	import ModalWrapper from './ModalWrapper.svelte';
	import { ECurrency } from '../../utils/enums/currency.enum';
	import CustomTextInput from '../common/CustomTextInput.svelte';

	export let open = false;

	export let toggleOpen = (value: boolean) => {};

	const action = '?/createBudget';

	const currencyOptions = [
		ECurrency.EUR,
		ECurrency.USD,
		ECurrency.GBP,
		ECurrency.HUF,
	];
</script>

<ModalWrapper title="Create budget" {open} {toggleOpen} {action}>
	<slot>
		<div class="flex flex-col gap-5 min-w-[378px] min-h-[178px] pt-4">
			<CustomTextInput label="Name" name="name" type="text" />

			<select
				class="bg-white border-gray-500 py-4 px-2 border rounded focus-visible:border-primary focus-visible:border-2"
				name="currency"
				id="currency"
			>
				{#each currencyOptions as currency}
					<option value={currency}>{currency.toUpperCase()}</option>
				{/each}
			</select>
		</div>
	</slot>
</ModalWrapper>
