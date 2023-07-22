<script lang="ts">
	import IconButton from '@smui/icon-button';
	import { Item } from '@smui/list';
	import CreateSubCategoryModal from '../modals/CreateSubCategoryModal.svelte';

	let open = false;

	function toggleOpen(value: boolean) {
		open = value;
	}
</script>

<Item disabled style="background-color: #676778; border-radius: 4px; color: white">
	<div class="grid grid-cols-12 rounded w-full">
		<div class="col-span-3">
			<div class="mdc-typography--headline6">
				Food
				<IconButton
					size="button"
					on:click={() => (open = true)}
					style="color: white"
					class="material-icons">add</IconButton
				>
			</div>
		</div>
		<div class="col-span-3">
			<div class="mdc-typography--headline6">800</div>
		</div>
		<div class="col-span-3">
			<div class="mdc-typography--headline6">0</div>
		</div>
		<div class="col-span-3">
			<div class="mdc-typography--headline6">800</div>
		</div>
	</div>
</Item>
<CreateSubCategoryModal {open} {toggleOpen} />
