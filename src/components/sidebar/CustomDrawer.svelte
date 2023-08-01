<script lang="ts">
	import Drawer, { Content } from '@smui/drawer';
	import List, { Item, Text } from '@smui/list';
	import IconButton from '@smui/icon-button';
	import Paper, { Title } from '@smui/paper';
	import { menuItems } from '../../constants/menuItems';
	import { capitalizeFirstLetter, formatCurrency } from '../../utils/helpers';
	import AccountModal from '../modals/AccountModal.svelte';
	import Button, { Label } from '@smui/button';
	import BudgetMenu from './BudgetMenu.svelte';
	import { page } from '$app/stores';
	import type { IAccount } from '../../interfaces/account';
	import type { IBudget } from '../../interfaces/budget';

	export let itemClick = (label: string) => {};

	const defaultBudget: IBudget = $page.data.defaultBudget;
	const accounts: IAccount[] = $page.data.accounts;

	let selectionIndex = 1;
	let accountSelectionIndex = 0;
	let open = false;

	function toggleOpen(value: boolean) {
		open = value;
	}
	const handleClick = (item: { id: number; label: string }) => {
		if (!defaultBudget) return;
		selectionIndex = item.id;
		itemClick(item.label);
	};
</script>

<Drawer>
	<Content>
		<Paper color="primary" style="height: 100vh;">
			<div class="flex flex-col justify-between h-full">
				<div>
					<BudgetMenu />
					<List singleSelection selectedIndex={selectionIndex}>
						{#each menuItems as item (item.id)}
							<Item
								selected={selectionIndex === item.id}
								on:click={() => handleClick(item)}
								disabled={!defaultBudget && item.id > 1}
							>
								<Text>
									<span>{capitalizeFirstLetter(item.label)}</span>
								</Text>
							</Item>
						{/each}
					</List>

					<div class="bg-white rounded-md">
						<Paper
							color="primary"
							variant="outlined"
							class="mdc-theme--primary"
						>
							<Title>
								<div class="flex items-center justify-between">
									<span class="text-black">Accounts</span>
									<IconButton
										on:click={() => (open = true)}
										disabled={!defaultBudget}
										style="color: black"
										class="material-icons">add</IconButton
									>
								</div>
							</Title>
							<List singleSelection selectedIndex={accountSelectionIndex}>
								{#each accounts as account (account.id)}
									<Item
										on:SMUI:action={() =>
											(accountSelectionIndex = parseInt(account.id + ''))}
										selected={accountSelectionIndex === account.id}
										on:click={() => itemClick(account.name)}
									>
										<div class="flex items-center justify-between w-full">
											<Text>{account.name}</Text>
											<Text
												>{formatCurrency(
													account.balance,
													defaultBudget.locale,
													defaultBudget.currency
												)}</Text
											>
										</div>
									</Item>
								{:else}
									<div
										class="mdc-typography--subtitle1 flex justify-center items-center mb-4"
									>
										No accounts yet
									</div>
								{/each}
							</List>
						</Paper>
					</div>
				</div>
				<form action="?/logout" method="post">
					<Button
						color="primary"
						style="background-color: white; width: 100%"
						type="submit"
					>
						<Label>Log out</Label>
					</Button>
				</form>
			</div>
		</Paper>
	</Content>
</Drawer>
<AccountModal {open} {toggleOpen} />
