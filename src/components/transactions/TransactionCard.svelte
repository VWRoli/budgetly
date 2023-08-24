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

	const defaultBudget = $page.data.defaultBudget;

	export let transaction: ITransaction;
	const isTransfer = !transaction.category?.title;
	let menu: Menu;
	const center = 'flex justify-between items-center';
	const amount = transaction.inflow
		? `+${transaction.inflow}`
		: `-${transaction.outflow}`;
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
						{isTransfer ? `Transfer:` : ''}
						{transaction.payee}
					</div>

					{#if !isTransfer}
						<Set
							chips={[
								transaction.category.title,
								transaction.subCategory.title,
							]}
							let:chip
						>
							<Chip {chip} shouldRemoveOnTrailingIconClick={false}>
								<ChipText>{chip}</ChipText>
							</Chip>
						</Set>
					{:else}
						<IconButton class="material-icons" disabled>star_border</IconButton>
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
					<Item on:SMUI:action={() => console.log('Delete')}>
						<Text>Delete</Text>
					</Item>
				</List>
			</Menu>
		</div>
	</div>
</Card>
