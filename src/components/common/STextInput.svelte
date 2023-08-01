<script lang="ts">
	export let value: number | string = '';
	export let name = '';
	export let error = '';
	export let placeholder = '';
	export let type = '';
	export let helperText = '';
	export let disabled = false;
</script>

<fieldset class="flex flex-col">
	
	<input
		{type}
		{name}
		{disabled}
		{placeholder}
		{value}
		class="border border-gray-400 py-3 px-4 rounded focus-visible:box-border focus-visible:border-primary focus-visible:border-2"
	/>
	{#if helperText && !error}
		<span class="text-xs text-gray-400">{helperText}</span>
	{/if}
	{#if error}
		<span class="text-red-700 text-xs text-left">{error}</span>
	{/if}
</fieldset>
