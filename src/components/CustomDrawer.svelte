<script lang="ts">
	import Drawer, { Content } from '@smui/drawer';
	import List, { Item, Text } from '@smui/list';
	import { menuItems } from '../constants/menuItems';

	export let itemClick = (label: string) => {};
</script>

<Drawer>
	<Content>
		<List>
			{#each menuItems as item (item.id)}
				<Item on:click={() => itemClick(item.label)}>
					<Text>{item.label}</Text>
				</Item>
			{/each}
		</List>
	</Content>
</Drawer>
