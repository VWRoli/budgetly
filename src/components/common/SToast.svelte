<script lang="ts">
	import Snackbar, { Label, Actions } from '@smui/snackbar';
	import IconButton from '@smui/icon-button';
	import { ToastType } from '$lib/enums/toastType.enum';

	export let message = '';
	export let toastType: ToastType = ToastType.ERROR;
	export let toast;
</script>

<Snackbar bind:this={toast} class={toastType}>
	<Label>{message}</Label>
	<Actions>
		<IconButton class="material-icons" title="Dismiss">close</IconButton>
	</Actions>
</Snackbar>
