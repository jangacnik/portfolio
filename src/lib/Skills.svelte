<script>
  import Reveal from './Reveal.svelte';
  import Placeholder from './Placeholder.svelte';

  let { title, groups } = $props();
</script>

<section id="skills">
  <Reveal><h2>{title}</h2></Reveal>
  <div class="grid">
    {#each groups as group, index (group.type)}
      <Reveal delay={index * 80} y={30}>
        <article>
          <Placeholder label={group.type} ratio="16 / 9" />
          <h3>{group.type}</h3>
          <div class="items">
            {#each group.items as item}
              <span class="chip">{item}</span>
            {/each}
          </div>
        </article>
      </Reveal>
    {/each}
  </div>
</section>

<style>
  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 1.5rem;
  }
  article {
    height: 100%;
    padding: 0.75rem 0.75rem 1.25rem;
    border: 1px solid rgb(var(--glow) / 0.2);
    border-radius: 1rem;
    background: var(--surface);
    transition: transform 0.3s, border-color 0.3s;
  }
  article:hover {
    transform: translateY(-4px);
    border-color: var(--accent);
  }
  h3 {
    margin: 1rem 0.5rem 0.75rem;
    font-size: 1.1rem;
  }
  .items {
    display: flex;
    flex-wrap: wrap;
    gap: 0.4rem;
    padding: 0 0.5rem;
  }
</style>
