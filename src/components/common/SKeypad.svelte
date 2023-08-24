<script lang="ts">
	import Button from '@smui/button';
	import { getCalcButtonType } from '$lib/utils/helpers';
	import { ECalculator } from '$lib/enums/calculator';

	// props
	export let expand = 1;
	export let type: ECalculator = ECalculator.NORMAL;
	export let clicked = () => {};
</script>

<Button
	color={getCalcButtonType(type)}
	variant={type === ECalculator.NORMAL ? 'outlined' : 'unelevated'}
	class="rounded-full min-w-fit"
	style="grid-column: span {expand}; "
	on:click={clicked}
>
	<slot>C</slot>
</Button>
