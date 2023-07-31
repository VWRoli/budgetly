<script lang="ts">
	export let options: string | { id: number; value: string }[];
	export let name = '';
	export let label = '';
	export let value = '';
	export let disabled = false;
	export let changeHandler = (id: number) => {};
</script>

<label for={name}>{label}</label>
<select
	{disabled}
	bind:value
	on:change={() => changeHandler(parseInt(value))}
	class="bg-white border-gray-500 py-4 px-2 border rounded focus-visible:border-primary focus-visible:border-2"
	{name}
>
	{#each options as option}
		<option value={typeof option === 'string' ? option : option.id}
			>{typeof option === 'string'
				? option.toUpperCase()
				: option.value}</option
		>
	{/each}
</select>
