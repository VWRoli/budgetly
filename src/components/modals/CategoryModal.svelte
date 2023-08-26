<script lang="ts">
	import ModalWrapper from './ModalWrapper.svelte';
	import STextInput from '../common/STextInput.svelte';
	import type { ActionResult } from '@sveltejs/kit';
	import type Snackbar from '@smui/snackbar';
	import { ToastType } from '$lib/enums/toastType.enum';
	import SToast from '../common/SToast.svelte';

	export let open = false;

	export let toggleOpen = (value: boolean) => {};

	let toast: Snackbar;
	let message = '';
	let toastType: ToastType;

	const action = '?/createCategory';

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
					message = 'Category successfully created';
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
	title="Create category"
	{open}
	{toggleOpen}
	{action}
	{handleSubmit}
>
	<slot>
		<div class=" flex flex-col gap-5">
			<STextInput placeholder="Title" name="title" />
		</div>
	</slot>
</ModalWrapper>

<SToast bind:toast {message} {toastType} />
