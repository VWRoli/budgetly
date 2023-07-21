<script lang="ts">
	import Accordion, { Panel, Header, Content } from '@smui-extra/accordion';
	import Button, { Label } from '@smui/button';
	import Paper from '@smui/paper';
	import CreateCategoryModal from '../modals/CreateCategoryModal.svelte';

	let createCategoryOpen = false;

	function toggleOpenCategory(value: boolean) {
		createCategoryOpen = value;
	}
</script>

<div class="p-10 h-full">
	<div class="flex justify-end items-center py-5 gap-5">
		<Button variant="unelevated" on:click={() => (createCategoryOpen = true)}>
			<Label>Create category</Label>
		</Button>
	</div>
	<Paper variant="outlined" color="primary">
		<Accordion>
			<Panel>
				<Header>Panel 1</Header>
				<Content>
					The content for panel 1.

					<ul>
						<li>Some</li>
						<li>List</li>
						<li>Items</li>
					</ul>
				</Content>
			</Panel>
			<Panel>
				<Header>Panel 2</Header>
				<Content>The content for panel 2.</Content>
			</Panel>
			<Panel>
				<Header>Panel 3</Header>
				<Content>
					The content for panel 3.

					<ul>
						<li>Some</li>
						<li>More</li>
						<li>List</li>
						<li>Items</li>
						<li>To</li>
						<li>Show</li>
						<li>Big</li>
						<li>Height</li>
					</ul>
				</Content>
			</Panel>
			<Panel>
				<Header>Panel 4</Header>
				<Content>
					If you like this component, you can thank <a
						href="https://github.com/NickantX"
						target="_blank">nick</a
					> who pushed me to make it. He was right, accordions are awesome! :D
				</Content>
			</Panel>
		</Accordion>
	</Paper>
</div>

<CreateCategoryModal open={createCategoryOpen} toggleOpen={toggleOpenCategory} />
