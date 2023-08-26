<script lang="ts">
	import ModalWrapper from './ModalWrapper.svelte';
	import STextInput from '../common/STextInput.svelte';
	import SToast from '../common/SToast.svelte';
	import type { ActionResult } from '@sveltejs/kit';
	import { ToastType } from '$lib/enums/toastType.enum';
	import type Snackbar from '@smui/snackbar';
	import SCalculator from '../common/SCalculator.svelte';

	export let open = false;
	export let id: number;
	let showCalculator = false;

	export let toggleOpen = (value: boolean) => {};

	const action = '?/updateBudgetedAmount';

	let toast: Snackbar;
	let message = '';
	let toastType: ToastType;
	export let value: number;

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
					message = 'Amount successfully updated';
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
	function handleKeydown(e: KeyboardEvent) {
		if (e.key === '+' || e.key === '-' || e.key === '*' || e.key === '/') {
			e.preventDefault();
			showCalculator = true;
		}
	}
</script>

<ModalWrapper title="Update amount" {open} {toggleOpen} {action} {handleSubmit}>
	<slot>
		<div class="flex flex-col gap-5">
			<STextInput
				placeholder="Amount"
				name="amount"
				bind:value
				handleKeyDown={handleKeydown}
			/>
			<input type="text" name="id" bind:value={id} class="hidden" />
		</div>
	</slot>
</ModalWrapper>

{#if showCalculator}
	<SCalculator numberInput={value + ''} />
{/if}
<SToast bind:toast {message} {toastType} />
