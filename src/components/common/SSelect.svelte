<script lang="ts">
	export let options: { id: string; value: string }[];
	export let name = '';
	export let className = '';
	export let value = '';
	export let placeholder = '';
	export let disabled = false;
	export let changeHandler = (id: number) => {};
</script>

<select
	{disabled}
	bind:value
	class={`bg-white border-gray-500 py-4 px-2 border rounded focus-visible:border-primary focus-visible:border-2 ${className}`}
	on:change={() => changeHandler(parseInt(value))}
	{name}
	>{#if placeholder}
		<option value="" disabled>{placeholder}</option>
	{/if}
	{#each options as option}
		<option value={option.id}>{option.value}</option>
	{/each}
</select>
