<script lang="ts">
	import { AppContent } from '@smui/drawer';
	import Transaction from '../../components/screens/Transactions.svelte';
	import Budget from '../../components/screens/Budget.svelte';
	import Reports from '../../components/screens/Reports.svelte';
	import CustomDrawer from '../../components/CustomDrawer.svelte';
	import { menuItems } from '../../constants/menuItems';
	
	export let data;
	
	let clicked = menuItems[0].label;

	function itemClick(label: string) {
		clicked = label;
	}
</script>

<svelte:head>
	<title>Dashboard</title>
</svelte:head>

<main class="flex h-screen">
	<CustomDrawer {itemClick} />
	Hello {data.user.email}
	<AppContent>
		{#if clicked === 'budget'}
			<Budget />
		{:else if clicked === 'reports'}
			<Reports />
		{:else if clicked === 'transactions'}
			<Transaction />
		{/if}
	</AppContent>
</main>
