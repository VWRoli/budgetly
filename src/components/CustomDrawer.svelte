<script lang="ts">
	import Drawer, { Content } from '@smui/drawer';
	import List, { Item, Text } from '@smui/list';
	import Paper, { Title } from '@smui/paper';
	import { menuItems } from '../constants/menuItems';
	import { accounts } from '../data/accounts';
	import { capitalizeFirstLetter } from '../utils/helpers';

	export let itemClick = (label: string) => {};

	let selectionIndex = 1;
	let accountSelectionIndex = 0;
</script>

<Drawer>
	<Content>
		<Paper color="primary" style="height: 100%;">
			<List singleSelection selectedIndex={selectionIndex}>
				{#each menuItems as item (item.id)}
					<Item
						on:SMUI:action={() => (selectionIndex = item.id)}
						selected={selectionIndex === item.id}
						on:click={() => itemClick(item.label)}
					>
						<Text><span class="">{capitalizeFirstLetter(item.label)}</span></Text>
					</Item>
				{/each}
			</List>

			<div class="bg-white rounded-md">
				<Paper color="primary" variant="outlined" class="mdc-theme--primary">
					<Title><span class="text-black">Accounts</span></Title>
					<List singleSelection selectedIndex={accountSelectionIndex}>
						{#each accounts as account (account.id)}
							<Item
								on:SMUI:action={() => (accountSelectionIndex = account.id)}
								selected={accountSelectionIndex === account.id}
								on:click={() => itemClick(account.name)}
							>
								<div class="flex items-center justify-between w-full">
									<Text>{account.name}</Text>
									<Text>{account.balance}</Text>
								</div>
							</Item>
						{/each}
					</List>
				</Paper>
			</div>
		</Paper>
	</Content>
</Drawer>
