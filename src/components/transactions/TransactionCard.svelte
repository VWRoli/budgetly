<script lang="ts">
	import Card from '@smui/card';
	import IconButton from '@smui/icon-button';
	import Paper from '@smui/paper';
	import Menu from '@smui/menu';
	import List, { Item, Separator, Text } from '@smui/list';

	let menu: Menu;
	const center = 'flex justify-between items-center';
</script>

<Card padded variant="outlined">
	<div class={center}>
		<div class="{center} w-full">
			<article class={center}>
				<div class="w-[78px] h-[78px] mr-5">
					<Paper color="primary"
						><div class="mdc-typography--headline4 flex justify-center items-center">P</div></Paper
					>
				</div>
				<div>
					<div class="mdc-typography--headline5">Payee</div>
					<div class="mdc-typography--subtitle1">Everyday Expenses: Groceries</div>
				</div>
			</article>
			<div class="text-center">
				<div class="mdc-typography--headline5">-2000HUF</div>
				<div class="mdc-typography--subtitle1">2023.07.18</div>
			</div>
		</div>
		<div>
			<IconButton class="material-icons" on:click={() => menu.setOpen(true)} title="More options"
				>more_vert</IconButton
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
