<script lang="ts">
	export let value: number | string = '';
	export let name = '';
	export let error = '';
	export let placeholder = '';
	export let type = '';
	export let helperText = '';
	export let disabled = false;
	export let handleKeyDown = (e: KeyboardEvent) => {};
</script>

<fieldset class="flex flex-col">
	<input
		{type}
		{name}
		{disabled}
		{placeholder}
		{value}
		on:keydown={handleKeyDown}
		class="border border-gray-400 py-3 px-4 rounded focus-visible:box-border focus-visible:border-primary focus-visible:border-2"
	/>
	{#if helperText && !error}
		<small class="text-xs text-gray-400">{helperText}</small>
	{/if}
	{#if error}
		<small class="text-red-700 text-xs text-left">{error}</small>
	{/if}
</fieldset>
