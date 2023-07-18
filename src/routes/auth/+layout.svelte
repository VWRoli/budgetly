<script>
	import Paper from '@smui/paper';
</script>

<div class="page">
	<Paper color="primary" variant="outlined">
		<div class="wrapper"><slot /></div>
	</Paper>
</div>

<style>
	.page {
		height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.wrapper {
		display: flex;
		flex-direction: column;
		min-width: 356px;
		min-height: 356px;
		justify-content: space-around;
		text-align: center;
	}
</style>
