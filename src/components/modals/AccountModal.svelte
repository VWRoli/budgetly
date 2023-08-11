<script lang="ts">
	import ModalWrapper from './ModalWrapper.svelte';
	import STextInput from '../common/STextInput.svelte';
	import type Snackbar from '@smui/snackbar';
	import SToast from '../common/SToast.svelte';
	import { ToastType } from '../../utils/enums/toastType.enum';
	import type { ActionResult } from '@sveltejs/kit';

	export let open = false;
	export let toggleOpen = (value: boolean) => {};

	let toast: Snackbar;
	let message = '';
	let toastType: ToastType;

	const action = '/dashboard/budget?/createAccount';

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
					message = 'Account successfully created';
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

<ModalWrapper
	title="Create account"
	{open}
	{toggleOpen}
	{action}
	{handleSubmit}
>
	<div class=" flex flex-col gap-5">
		<STextInput placeholder="Name" name="name" type="text" />
	</div>
</ModalWrapper>

<SToast bind:toast {message} {toastType} />
