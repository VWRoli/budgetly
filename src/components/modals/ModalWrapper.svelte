<script lang="ts">
	import { enhance } from '$app/forms';
	import Button, { Label } from '@smui/button';
	import Dialog, { Title, Content, Actions } from '@smui/dialog';

	export let open = false;
	export let title = '';
	export let action = '';

	export let toggleOpen = (value: boolean) => {};
</script>

<Dialog bind:open on:SMUIDialog:closed={() => toggleOpen(false)}>
	<Title>{title}</Title>
	<form {action} method="post" class="p-4">
		<Content>
			<slot />
		</Content>
		<Actions>
			<Button type="button" color="secondary">
				<Label on:click={() => toggleOpen(false)}>Cancel</Label>
			</Button>
			<Button
				on:click={() => toggleOpen(false)}
				type="submit"
				color="primary"
				variant="unelevated"
			>
				<Label>Create</Label>
			</Button>
		</Actions>
	</form>
</Dialog>
