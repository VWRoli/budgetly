<script>
	import CustomDrawer from '../../components/sidebar/CustomDrawer.svelte';
</script>

<svelte:head>
	<title>Dashboard</title>
</svelte:head>

<CustomDrawer />
<main class="pl-[255px] h-screen">
	<slot />
</main>
