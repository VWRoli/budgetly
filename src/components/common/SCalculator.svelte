<script lang="ts">
	import { fly } from 'svelte/transition';
	import Keypad from './SKeypad.svelte';
	import Paper from '@smui/paper';

	let numberInput = '';
	let total = 0;

	// private function
	function addToEquation(value: string | number) {
		numberInput += value;
	}

	const clear = () => {
		total = 0;
		numberInput = '';
	};

	function calculate() {
		if (numberInput !== '') {
			numberInput = result().toString();
		}
	}

	function replaceAll(string: string, search: string, replace: string) {
		return string.split(search).join(replace);
	}

	function formatString(value: string) {
		return replaceAll(replaceAll(value, '*', 'x'), '/', '÷');
	}

	// computed
	let result = () => {
		if (!isNaN(+numberInput.slice(-1))) {
			return eval(numberInput);
		}
		return eval(numberInput.slice(0, -1));
	};

	// reactive values
	$: if (
		numberInput !== '' &&
		!isNaN(+numberInput.slice(-1)) &&
		numberInput != result()
	) {
		total = result().toString();
	}
</script>

<Paper
	variant="outlined"
	color="primary"
	class="absolute top-0 left-0 z-50 bg-white"
>
	<div class="results">
		<div class="calculations">{numberInput}</div>
		{#if total !== 0}
			<input
				transition:fly={{ x: 10, duration: 800 }}
				type="text"
				class="total"
				value={total}
			/>
		{/if}
	</div>

	<div class="grid grid-cols-4 grid-rows-5 gap-2">
		<Keypad expand={3} type="clear" clicked={clear} />
		<Keypad type="operator" clicked={() => addToEquation('/')}>÷</Keypad>

		<Keypad clicked={() => addToEquation(7)}>7</Keypad>
		<Keypad clicked={() => addToEquation(8)}>8</Keypad>
		<Keypad clicked={() => addToEquation(9)}>9</Keypad>

		<Keypad type="operator" clicked={() => addToEquation('*')}>x</Keypad>
		<Keypad clicked={() => addToEquation(4)}>4</Keypad>
		<Keypad clicked={() => addToEquation(5)}>5</Keypad>
		<Keypad clicked={() => addToEquation(6)}>6</Keypad>

		<Keypad type="operator" clicked={() => addToEquation('-')}>-</Keypad>
		<Keypad clicked={() => addToEquation(1)}>1</Keypad>
		<Keypad clicked={() => addToEquation(2)}>2</Keypad>
		<Keypad clicked={() => addToEquation(3)}>3</Keypad>

		<Keypad type="operator" clicked={() => addToEquation('+')}>+</Keypad>
		<Keypad expand={3} clicked={() => addToEquation(0)}>0</Keypad>

		<Keypad type="equal" clicked={() => calculate()}>=</Keypad>
	</div>
</Paper>

<style>
	.results {
		display: flex;
		height: 94px;
		flex-direction: column;
		text-align: right;
	}

	.calculations {
		height: 20px;
		color: #828282;
		padding: 0 10px;
	}

	.total {
		color: #333;
		text-align: right;
		padding: 10px;
		font-size: 44px;
		margin: 0;
		border: none;
	}
</style>
