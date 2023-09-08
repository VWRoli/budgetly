<script>
	import CustomDrawer from '../../components/sidebar/CustomDrawer.svelte';

	export let data;
	$: ({ accounts, defaultBudget, budgets } = data);
</script>

<svelte:head>
	<title>Dashboard</title>
</svelte:head>

<CustomDrawer {accounts} {defaultBudget} {budgets} />
<main class="pl-[255px] h-screen">
	<slot />
</main>
