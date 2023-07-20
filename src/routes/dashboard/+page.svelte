<script lang="ts">
	import { AppContent } from '@smui/drawer';
	import Transaction from '../../components/screens/Transactions.svelte';
	import Budget from '../../components/screens/Budget.svelte';
	import Reports from '../../components/screens/Reports.svelte';
	import CustomDrawer from '../../components/CustomDrawer.svelte';
	import { menuItems } from '../../constants/menuItems';

	let clicked = menuItems[0].label;

	function itemClick(label: string) {
		clicked = label;
	}
</script>

<div class="drawer-container">
	<CustomDrawer {itemClick} />

	<AppContent>
		<main>
			{#if clicked === 'budget'}
				<Budget />
			{:else if clicked === 'reports'}
				<Reports />
			{:else if clicked === 'transactions'}
				<Transaction />
			{/if}
		</main>
	</AppContent>
</div>

<style>
	.drawer-container {
		display: flex;
		flex: 1;
		height: 100vh;
		border: 1px solid var(--mdc-theme-text-hint-on-background, rgba(0, 0, 0, 0.1));
		overflow: hidden;
		z-index: 0;
		width: 100%;
	}
</style>
