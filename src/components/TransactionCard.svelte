<script lang="ts">
	import Card, { Actions, ActionIcons, Content } from '@smui/card';
	import IconButton from '@smui/icon-button';
	import Paper from '@smui/paper';

	let clicked = 0;
</script>

<Card padded variant="outlined">
	<div class="txn-card-warpper">
		<div class="txn-card-content">
			<div>
				<div class="avatar">
					<Paper color="primary"><div class="mdc-typography--headline4 center">P</div></Paper>
				</div>
				<div>
					<div class="mdc-typography--headline5">Payee</div>
					<div class="mdc-typography--subtitle1">Everyday Expenses: Groceries</div>
				</div>
			</div>
			<div class="mdc-typography--headline5">-2000HUF</div>
		</div>
		<div>
			<IconButton class="material-icons" on:click={() => clicked++} title="More options"
				>more_vert</IconButton
			>
		</div>
	</div>
</Card>

<style lang="scss">
	.avatar {
		width: 78px;
		height: 78px;
		margin-right: 20px;
	}
	.center {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.txn-card-warpper {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.txn-card-content {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		& > div {
			display: flex;
			align-items: center;
			justify-content: space-between;
		}
	}
</style>
