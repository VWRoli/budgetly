<script>
	import Button, { Label } from '@smui/button';
	import { Title, Content } from '@smui/paper';
	import Paper from '@smui/paper';
</script>

<div class="page">
	<Paper color="primary" variant="outlined">
		<div class="wrapper">
			<Title>budgetly</Title>
			<Content>
				<div class="button-wrapper">
					<Button href="/auth/register">
						<Label>Register</Label>
					</Button>

					<Button href="/auth/login" variant="raised">
						<Label>Login</Label>
					</Button>
				</div>
			</Content>
		</div>
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
	.button-wrapper {
		display: flex;
		flex-direction: column;
	}
</style>
