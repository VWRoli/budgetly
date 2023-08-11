<script lang="ts">
	import Button, { Label } from '@smui/button';
	import Paper, { Title, Content } from '@smui/paper';
	import List, { Item, Separator, Text } from '@smui/list';
	import { page } from '$app/stores';
	import IconButton from '@smui/icon-button';
	import Tooltip, { Wrapper } from '@smui/tooltip';
	import Menu from '@smui/menu';
	import BudgetModal from '../modals/BudgetModal.svelte';
	import type { IBudget } from '../../interfaces/budget';
	import { MAX_ALLOWED_BUDGETS } from '../../constants/variables';
	import { formatCurrency } from '../../utils/helpers';

	let menu: Menu;
	let open = false;

	function toggleOpen(value: boolean) {
		open = value;
	}

	const defaultBudget: IBudget = $page.data.defaultBudget;
	const budgets: IBudget[] = $page.data.budgets;
	const maxBudgets = budgets.length === MAX_ALLOWED_BUDGETS;

	function createOrOpen() {
		if (!defaultBudget) {
			toggleOpen(true);
		} else {
			menu.setOpen(true);
		}
	}
</script>

<section>
	<div class="text-center mb-4">{$page.data.user.email}</div>
	<Button on:click={createOrOpen} style="background-color: white; width: 100%">
		{#if defaultBudget}
			<Label>{defaultBudget.name} ({defaultBudget.currency})</Label>
		{:else}
			<Label>Create Budget</Label>
		{/if}
	</Button>
	<Paper class="p-2 text-center mt-4 mb-2" color="custom-green">
		<Content>
			<small> Available to Budget: </small>
			{formatCurrency(
				defaultBudget.availableToBudget,
				defaultBudget.locale,
				defaultBudget.currency
			)}
		</Content>
	</Paper>
</section>

<Menu bind:this={menu} style="width: 200px">
	<List>
		{#each budgets as budget}
			<Item on:SMUI:action={() => {}}>
				<div class="flex justify-between items-center w-full">
					<Text>{budget.name}</Text>
					<Text>({budget.currency})</Text>
					<IconButton
						size="button"
						on:click={() => (open = true)}
						class="material-icons">edit</IconButton
					>
				</div>
			</Item>
		{/each}

		<Separator />
		<Wrapper>
			<Item disabled={maxBudgets} on:SMUI:action={() => toggleOpen(true)}>
				<Text>Create Budget</Text>
			</Item>
			{#if maxBudgets}
				<Tooltip xPos="center"
					>You have created the maxuimum allowed budgets ({MAX_ALLOWED_BUDGETS})</Tooltip
				>
			{/if}
		</Wrapper>
	</List>
</Menu>

<BudgetModal {open} {toggleOpen} />
