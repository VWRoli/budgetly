<script lang="ts">
	import Card from '@smui/card';
	import Paper from '@smui/paper';
	import Menu from '@smui/menu';
	import IconButton from '@smui/icon-button';
	import Chip, { Set, Text as ChipText } from '@smui/chips';
	import List, { Item, Separator, Text } from '@smui/list';
	import type { ITransaction } from '../../interfaces/transaction';
	import { formatCurrency, formatDate } from '$lib/utils/helpers';
	import { page } from '$app/stores';
	import type { ActionResult } from '@sveltejs/kit';
	import type Snackbar from '@smui/snackbar';
	import { ToastType } from '../../lib/enums/toastType.enum';
	import { enhance } from '$app/forms';
	import SToast from '../common/SToast.svelte';

	const defaultBudget = $page.data.defaultBudget;

	export let transaction: ITransaction;

	let toast: Snackbar;
	let message = '';
	let toastType: ToastType;

	const isTransfer = transaction.payee.startsWith('Transfer:');
	let menu: Menu;
	const center = 'flex justify-between items-center';
	const amount = transaction.inflow
		? `+${transaction.inflow}`
		: `-${transaction.outflow}`;

	const chips = transaction.subCategory?.title
		? [transaction.category?.title, transaction.subCategory?.title]
		: [transaction.category?.title];

	const handleDelete = () => {
		return async ({
			result,
			update,
		}: {
			result: ActionResult;
			update: () => Promise<void>;
		}) => {
			switch (result.type) {
				case 'success':
					message = 'Transaction deleted successfully';
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

<Card padded variant="outlined">
	<div class={center}>
		<div class="{center} w-full">
			<article class={center}>
				<div class="w-[78px] h-[78px] mr-5">
					<Paper color="primary">
						<div
							class="mdc-typography--headline4 flex justify-center items-center"
						>
							{transaction.payee.slice(0, 1).toUpperCase()}
						</div>
					</Paper>
				</div>
				<div>
					<div class="mdc-typography--headline5">
						{transaction.payee}
					</div>

					{#if !isTransfer}
						<Set {chips} let:chip>
							<Chip {chip} shouldRemoveOnTrailingIconClick={false}>
								<ChipText>{chip}</ChipText>
							</Chip>
						</Set>
					{:else}
						<IconButton class="material-icons" disabled>sync_alt</IconButton>
					{/if}
				</div>
			</article>
			<div class="text-center">
				<div class="mdc-typography--headline5">
					{formatCurrency(
						+amount,
						defaultBudget.locale,
						defaultBudget.currency
					)}
				</div>
				<div class="mdc-typography--subtitle1">
					{formatDate(transaction.date, defaultBudget.locale)}
				</div>
			</div>
		</div>
		<div>
			<IconButton
				class="material-icons"
				on:click={() => menu.setOpen(true)}
				title="More options">more_vert</IconButton
			>
			<Menu bind:this={menu}>
				<List>
					<Item on:SMUI:action={() => console.log('Edit')}>
						<Text>Edit</Text>
					</Item>

					<Separator />
					<form
						action="/dashboard/transactions?/deleteTransaction"
						method="POST"
						use:enhance={handleDelete}
					>
						<button type="submit">
							<Item>
								<Text>Delete</Text>
							</Item>
						</button>
						<input
							type="text"
							name="transactionId"
							bind:value={transaction.id}
							class="hidden"
						/>
					</form>
				</List>
			</Menu>
		</div>
	</div>
</Card>
<SToast bind:toast {message} {toastType} />
