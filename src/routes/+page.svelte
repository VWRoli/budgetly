<script>
	import Button, { Label } from '@smui/button';
	import { Title, Content } from '@smui/paper';
	import Paper from '@smui/paper';
</script>

<div class="h-screen flex flex-col justify-center items-center">
	<Paper color="primary" variant="outlined">
		<div class="flex flex-col justify-around text-center min-w-[356px] min-h-[356px]">
			<Title>budgetly</Title>
			<Content>
				<div class="flex flex-col">
					<Button href="/auth/register">
						<Label>Register</Label>
					</Button>
					<div class="h-4" />
					<Button href="/auth/login" variant="raised">
						<Label>Login</Label>
					</Button>
				</div>
			</Content>
		</div>
	</Paper>
</div>
