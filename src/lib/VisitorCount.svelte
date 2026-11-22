<script>
  import { visitors } from './visitors.svelte.js';

  let { label, source } = $props();
</script>

{#if Number.isFinite(visitors.count)}· {new Intl.NumberFormat().format(visitors.count)} {label} ({source}){/if}
