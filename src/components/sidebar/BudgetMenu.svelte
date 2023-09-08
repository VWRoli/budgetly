<script lang="ts">
	import Button, { Label } from '@smui/button';
	import Paper, { Content } from '@smui/paper';
	import List, { Item, Separator, Text } from '@smui/list';
	import { page } from '$app/stores';
	import IconButton from '@smui/icon-button';
	import Tooltip, { Wrapper } from '@smui/tooltip';
	import Menu from '@smui/menu';
	import BudgetModal from '../modals/BudgetModal.svelte';
	import type { IBudget } from '../../interfaces/budget';
	import { MAX_ALLOWED_BUDGETS } from '$lib/constants/variables';
	import { formatCurrency } from '$lib/utils/helpers';
	import { enhance } from '$app/forms';
	import { ToastType } from '../../lib/enums/toastType.enum';
	import type Snackbar from '@smui/snackbar';
	import type { ActionResult } from '@sveltejs/kit';
	import SToast from '../common/SToast.svelte';

	let menu: Menu;
	let open = false;

	let toast: Snackbar;
	let message = '';
	let toastType: ToastType;

	function toggleOpen(value: boolean) {
		open = value;
	}
	export let defaultBudget: IBudget | null;
	export let budgets: IBudget[];
	const maxBudgets = budgets.length === MAX_ALLOWED_BUDGETS;

	function createOrOpen() {
		if (!defaultBudget) {
			toggleOpen(true);
		} else {
			menu.setOpen(true);
		}
	}
	function getColor(amount: number) {
		if (amount > 0) {
			return 'custom-green';
		} else if (amount < 0) {
			return 'custom-red';
		} else {
			return 'custom-blue';
		}
	}

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
					message = 'Budget successfully changed';
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

<section>
	<div class="text-center mb-4">{$page.data.user.email}</div>
	<Button on:click={createOrOpen} style="background-color: white; width: 100%">
		{#if defaultBudget}
			<Label>{defaultBudget.name} ({defaultBudget.currency})</Label>
		{:else}
			<Label>Create Budget</Label>
		{/if}
	</Button>
	<Paper
		class="p-2 text-center mt-4 mb-2"
		color={getColor(defaultBudget?.availableToBudget || 0)}
		>{#if defaultBudget}
			<Content>
				<small> Available to Budget: </small>
				{formatCurrency(
					defaultBudget?.availableToBudget,
					defaultBudget?.locale,
					defaultBudget?.currency
				)}
			</Content>
		{/if}
	</Paper>
</section>

<Menu bind:this={menu} class="w-[230px]">
	<List>
		{#each budgets as budget}
			<form
				action="/dashboard/budget?/changeDefaultBudget"
				class="flex justify-between items-center w-full"
				method="POST"
				use:enhance={handleSubmit}
			>
				<Item>
					<Button
						color="secondary"
						style="background-color: white; width: 100%"
						type="submit"
						on:click={() => menu.setOpen(false)}
					>
						<Text>{budget.name}</Text>
						<Text>({budget.currency})</Text>
					</Button>
					<input class="hidden" type="text" name="id" bind:value={budget.id} />
					<IconButton
						type="button"
						size="button"
						on:click={() => (open = true)}
						class="material-icons">edit</IconButton
					>
				</Item>
			</form>
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
<SToast bind:toast {message} {toastType} />
