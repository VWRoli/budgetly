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
	import { enhance } from '$app/forms';

	const defaultBudget: IBudget = $page.data.defaultBudget;
	const accounts: IAccount[] = $page.data.accounts;

	let open = false;

	function toggleOpen(value: boolean) {
		open = value;
	}
</script>

<Drawer class="absolute">
	<Content>
		<Paper color="primary" style="height: 100vh;">
			<div class="flex flex-col justify-between h-full">
				<div>
					<BudgetMenu />
					<List singleSelection>
						{#each menuItems as item (item.id)}
							<a href={item.route}>
								<Item selected={item.route === $page.route.id}>
									<Text>
										<span>{capitalizeFirstLetter(item.label)}</span>
									</Text>
								</Item>
							</a>
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
							<List>
								{#each accounts as account (account.id)}
									<Item>
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
					<form action="/dashboard/budget?/logout" method="post">
						<Button
							color="primary"
							style="background-color: white; width: 100%"
							type="submit"
						>
							<Label>Log out</Label>
						</Button>
					</form>
				</div>
			</div>
		</Paper>
	</Content>
</Drawer>
<AccountModal {open} {toggleOpen} />
