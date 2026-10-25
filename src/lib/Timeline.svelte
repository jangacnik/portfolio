<script>
  import Reveal from './Reveal.svelte';

  let { items, entry, gap = '3rem' } = $props();
</script>

<ol style="gap:{gap}">
  {#each items as item, index}
    <li>
      <Reveal delay={index * 100}>
        {@render entry(item)}
      </Reveal>
    </li>
  {/each}
</ol>

<style>
  ol {
    list-style: none;
    padding: 0;
    position: relative;
    display: grid;
  }
  ol::before {
    content: '';
    position: absolute;
    left: 0.35rem;
    top: 0.5rem;
    bottom: 0.5rem;
    width: 1px;
    background: rgb(var(--glow) / 0.3);
  }
  li {
    position: relative;
    min-width: 0;
    padding-left: 2.25rem;
  }
  li::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0.45rem;
    width: 0.75rem;
    height: 0.75rem;
    border-radius: 50%;
    background: var(--bg);
    border: 2px solid var(--accent);
  }
</style>
