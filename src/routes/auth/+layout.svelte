<script>
	import Paper from '@smui/paper';
</script>

<div class="h-screen flex flex-col justify-center items-center">
	<Paper color="primary" variant="outlined">
		<div class="flex flex-col justify-around text-center min-w-[356px] min-h-[356px]"><slot /></div>
	</Paper>
</div>
