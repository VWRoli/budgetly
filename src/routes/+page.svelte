<div>
  <Button on:click={() => clicked++} variant="raised">
    <Label>Default</Label>
  </Button>
</div>

<script>
import Button, { Label } from '@smui/button';

  let clicked = 0;
</script>