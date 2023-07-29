<script lang="ts">
	import Button, { Label } from '@smui/button';
	import List, { Item, Separator, Text } from '@smui/list';
	import { page } from '$app/stores';
	import Menu from '@smui/menu';
	import CreateBudgetModal from '../modals/CreateBudgetModal.svelte';
	import type { IBudget } from '../../interfaces/budget';

	let menu: Menu;
	let clicked = 'nothing yet';
	let open = false;

	function toggleOpen(value: boolean) {
		open = value;
	}

	const defaultBudget: IBudget = $page.data.defaultBudget;
	const budgets: IBudget[] = $page.data.budgets;

	function createOrOpen() {
		if (!defaultBudget) {
			toggleOpen(true);
		} else {
			menu.setOpen(true);
		}
	}
</script>

<section class="mb-8">
	<div class="text-center mb-4">{$page.data.user.email}</div>
	<Button on:click={createOrOpen} style="background-color: white; width: 100%">
		<Label>{defaultBudget ? defaultBudget.name : 'Create Budget'}</Label>
	</Button>
</section>

<Menu bind:this={menu}>
	<List>
		{#each budgets as budget}
			<Item on:SMUI:action={() => (clicked = 'Cut')}>
				<Text>{budget.name}</Text>
			</Item>
		{/each}

		<Separator />
		<Item on:SMUI:action={() => toggleOpen(true)}>
			<Text>Create Budget</Text>
		</Item>
	</List>
</Menu>

<CreateBudgetModal {open} {toggleOpen} />
