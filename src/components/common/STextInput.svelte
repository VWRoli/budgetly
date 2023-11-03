<script lang="ts">
	export let value: number | string = '';
	export let name = '';
	export let error = '';
	export let placeholder = '';
	export let helperText = '';
	export let disabled = false;
	export let handleKeyDown = (e: KeyboardEvent) => {};
	export let options: string[] = [];

	function handleFocus(event: FocusEvent) {
		const target = event.target;

		if (target instanceof HTMLInputElement) {
			target.select();
		}
	}
</script>

<fieldset class="flex flex-col">
	<input
		autocomplete="off"
		type="text"
		{name}
		{disabled}
		{placeholder}
		on:focus={handleFocus}
		bind:value
		list="options"
		on:keydown={handleKeyDown}
		class="border border-gray-400 py-3 px-4 rounded focus-visible:box-border focus-visible:border-primary focus-visible:border-2"
	/>
	{#if options.length}
		<datalist id="options">
			{#each options as option}
				<option value={option} />
			{/each}
		</datalist>
	{/if}
	{#if helperText && !error}
		<small class="text-xs text-gray-400">{helperText}</small>
	{/if}
	{#if error}
		<small class="text-red-700 text-xs text-left">{error}</small>
	{/if}
</fieldset>
