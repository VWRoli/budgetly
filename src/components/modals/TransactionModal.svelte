<script lang="ts">
	import Autocomplete from '@smui-extra/autocomplete';
	import Textfield from '@smui/textfield';
	import type { ITransaction } from '../../interfaces/transaction';
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

	const categoryOptions = $page.data.categories.map((c: ICategory) => ({
		id: c.id,
		value: c.title,
	}));
	const accountOptions = $page.data.accounts.map((c: IAccount) => ({
		id: c.id,
		value: c.name,
	}));

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
</script>

<ModalWrapper title="Create transaction" {open} {toggleOpen} {action}>
	<slot>
		<div class="min-h-[500px] flex flex-col gap-5">
			<SSelect options={accountOptions} name="accountId" label="Account" />

			<STextInput label="Payee" name="payee" type="text" />
			<!-- <Autocomplete
				options={['Store']}
				label="Payee"
				textfield$variant="outlined"
			/> -->
			<div class="flex">
				<STextInput label="Inflow" name="inflow" type="number" />
				<STextInput label="Outlfow" name="outflow" type="number" />
			</div>
			<div>
				<SSelect
					bind:value={selectedCategory}
					options={categoryOptions}
					name="categoryId"
					label="Category"
					changeHandler={fetchSubCategories}
				/>

				<SSelect
					disabled={!subCategoryOptions.length}
					options={subCategoryOptions}
					name="subCategoryId"
					label="SubCategory"
				/>
			</div>
			<DateInput name="date" bind:value={date} />
			<input type="text" name="date" bind:value={date} class="hidden" />
		</div>
	</slot>
</ModalWrapper>
