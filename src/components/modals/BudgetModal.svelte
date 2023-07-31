<script lang="ts">
	import ModalWrapper from './ModalWrapper.svelte';
	import { ECurrency } from '../../utils/enums/currency.enum';
	import STextInput from '../common/STextInput.svelte';
	import SSelect from '../common/SSelect.svelte';

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
			<STextInput label="Name" name="name" type="text" />
			<SSelect options={currencyOptions} name="currency" />
		</div>
	</slot>
</ModalWrapper>
