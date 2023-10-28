<script lang="ts">
	import ModalWrapper from './ModalWrapper.svelte';
	import STextInput from '../common/STextInput.svelte';
	import type { ActionResult } from '@sveltejs/kit';
	import { ToastType } from '$lib/enums/toastType.enum';
	import type Snackbar from '@smui/snackbar';
	import SToast from '../common/SToast.svelte';

	export let open = false;
	export let id: number;
	export let toggleOpen = (value: boolean) => {};

	let toast: Snackbar;
	let message = '';
	let toastType: ToastType;

	const action = '?/createSubCategory';

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
					message = 'SubCategory successfully created';
					toastType = ToastType.SUCCESS;
					toast.open();
					id = result?.data?.categoryId;

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
	title="Create SubCategory"
	{open}
	{toggleOpen}
	{action}
	{handleSubmit}
>
	<slot>
		<div class=" flex flex-col gap-5">
			<STextInput placeholder="Title" name="title" />
			<input bind:value={id} type="text" name="categoryId" class="hidden" />
		</div>
	</slot>
</ModalWrapper>
<SToast bind:toast {message} {toastType} />
