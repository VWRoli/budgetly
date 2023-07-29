<script lang="ts">
	import Button, { Label } from '@smui/button';
	import List, { Item, Separator, Text } from '@smui/list';
	import { page } from '$app/stores';
	import Menu from '@smui/menu';
	import CreateBudgetModal from '../modals/CreateBudgetModal.svelte';

	let menu: Menu;
	let clicked = 'nothing yet';
	let open = false;

	function toggleOpen(value: boolean) {
		open = value;
	}
	console.log($page.data);
	const defaultBudgetId = $page.data.user.defaultBudgetId;
	function createOrOpen() {
		if (!defaultBudgetId) {
			toggleOpen(true);
		} else {
			menu.setOpen(true);
		}
	}
</script>

<section class="mb-8">
	<div class="text-center mb-4">{$page.data.user.email}</div>
	<Button on:click={createOrOpen} style="background-color: white; width: 100%">
		<Label>{defaultBudgetId ? defaultBudgetId : 'Create Budget'}</Label>
	</Button>
</section>

<Menu bind:this={menu}>
	<List>
		<Item on:SMUI:action={() => (clicked = 'Cut')}>
			<Text>Cut</Text>
		</Item>
		<Item on:SMUI:action={() => (clicked = 'Copy')}>
			<Text>Copy</Text>
		</Item>
		<Item on:SMUI:action={() => (clicked = 'Paste')}>
			<Text>Paste</Text>
		</Item>
		<Separator />
		<Item on:SMUI:action={() => toggleOpen(true)}>
			<Text>Create Budget</Text>
		</Item>
	</List>
</Menu>

<CreateBudgetModal {open} {toggleOpen} />
