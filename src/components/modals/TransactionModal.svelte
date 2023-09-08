<script lang="ts">
	import { DateInput } from 'date-picker-svelte';
	import ModalWrapper from './ModalWrapper.svelte';
	import STextInput from '../common/STextInput.svelte';
	import SSelect from '../common/SSelect.svelte';
	import { page } from '$app/stores';
	import type { ICategory } from '../../interfaces/category';
	import type { ISubCategory } from '../../interfaces/subCategory';
	import { fetchData } from '../../api';
	import Cookies from 'js-cookie';
	import type { IAccount } from '../../interfaces/account';
	import type Snackbar from '@smui/snackbar';
	import SToast from '../common/SToast.svelte';
	import { ToastType } from '$lib/enums/toastType.enum';
	import type { ActionResult } from '@sveltejs/kit';
	import { INCOME_FOR_THIS_MONTH } from '$lib/constants/variables';
	import SInput from '../common/SInput.svelte';

	$: accountId = $page.url.searchParams.get('accountId');

	const categoryOptions = $page.data.categories.map((c: ICategory) => ({
		id: c.id,
		value: c.title,
	}));
	categoryOptions.unshift(INCOME_FOR_THIS_MONTH);

	const accountOptions = $page.data.accounts.map((c: IAccount) => ({
		id: c.id,
		value: c.name,
	}));

	let toast: Snackbar;
	let message = '';
	let toastType: ToastType;

	let date: Date;
	let selectedCategory = '';
	let subCategoryOptions: { id: number; value: string }[] = [];

	const token = Cookies.get('AuthorizationToken');

	const fetchSubCategories = async (id: number) => {
		const subCategories = await fetchData(
			`/sub-categories/${id}`,
			token as string
		);
		subCategoryOptions = subCategories.map((sc: ISubCategory) => ({
			id: sc.id,
			value: sc.title,
		}));
	};

	export let open = false;
	export let toggleOpen = (value: boolean) => {};

	const action = '?/createTransaction';

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
					message = 'Transaction successfully created';
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
	title="Create transaction"
	{open}
	{toggleOpen}
	{action}
	{handleSubmit}
>
	<slot>
		<div class="min-h-[500px] flex flex-col gap-5">
			{accountId}
			<SSelect
				placeholder="Account"
				options={accountOptions}
				name="accountId"
			/>
			<STextInput placeholder="Payee" name="payee" />

			<div class="flex gap-4">
				<SInput placeholder="Inflow" name="inflow" type="number" />
				<SInput placeholder="Outlfow" name="outflow" type="number" />
			</div>
			<div class="flex gap-4">
				<SSelect
					bind:value={selectedCategory}
					options={categoryOptions}
					name="categoryId"
					placeholder="Category"
					changeHandler={fetchSubCategories}
					className="flex-1"
				/>

				<SSelect
					disabled={!subCategoryOptions.length}
					options={subCategoryOptions}
					name="subCategoryId"
					placeholder="SubCategory"
					className="flex-1"
				/>
			</div>
			<DateInput bind:value={date} />
			<input type="text" name="date" bind:value={date} class="hidden" />
		</div>
	</slot>
</ModalWrapper>

<SToast bind:toast {message} {toastType} />
