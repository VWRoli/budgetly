<script lang="ts">
	export let options: { id: number | string; value: string }[];
	export let name = '';
	export let className = '';
	export let value = '';
	export let placeholder = '';
	export let selected = '';
	export let disabled = false;
	export let changeHandler = (id: number) => {};
</script>

{selected}
<select
	{disabled}
	bind:value
	on:change={() => changeHandler(parseInt(value))}
	class={`bg-white border-gray-500 py-4 px-2 border rounded focus-visible:border-primary focus-visible:border-2 ${className}`}
	{name}
>
	{#if placeholder}
		<option value="" disabled>{placeholder}</option>
	{/if}
	{#each options as option}
		<option value={option.id}>{option.value}</option>
	{/each}
</select>
