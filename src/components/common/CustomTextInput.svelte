<script lang="ts">
	import Textfield from '@smui/textfield';
	import Icon from '@smui/textfield/icon';
	import HelperText from '@smui/textfield/helper-text';

	export let value = '';
	export let error = '';
	export let label = '';
	export let icon = '';
	export let type = '';
	export let helperText = '';
	export let disabled = false;
</script>

<Textfield invalid={error ? true : false} {type} variant="outlined" bind:value {label} {disabled}>
	<Icon class="material-icons" slot="leadingIcon">{icon}</Icon>
	<HelperText slot="helper">
		{#if helperText && !error}
			{helperText}
		{/if}
	</HelperText>
</Textfield>
{#if error}
	<span class="text-red-700 text-xs text-left">{error}</span>
{/if}
