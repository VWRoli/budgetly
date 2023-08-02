<script lang="ts">
	import Snackbar, { Label, Actions } from '@smui/snackbar';
	import IconButton from '@smui/icon-button';

	export let message = '';
	export let toast;
</script>

<Snackbar bind:this={toast} class="demo-error">
	<Label>{message}</Label>
	<Actions>
		<IconButton class="material-icons" title="Dismiss">close</IconButton>
	</Actions>
</Snackbar>
