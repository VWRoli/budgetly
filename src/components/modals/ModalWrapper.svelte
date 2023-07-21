<script lang="ts">
	import Button, { Label } from '@smui/button';
	import Dialog, { Title, Content, Actions } from '@smui/dialog';

	export let open = false;
	export let title = '';

	export let toggleOpen = (value: boolean) => {};

	export let handleCreate = () => {
		toggleOpen(false);
	};
</script>

<Dialog bind:open>
	<Title>{title}</Title>
	<Content>
		<slot />
	</Content>
	<Actions>
		<Button color="secondary">
			<Label on:click={() => toggleOpen(false)}>Cancel</Label>
		</Button>
		<Button color="primary" variant="unelevated">
			<Label on:click={handleCreate}>Create</Label>
		</Button>
	</Actions>
</Dialog>
