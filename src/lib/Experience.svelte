<script>
  import Reveal from './Reveal.svelte';
  import Timeline from './Timeline.svelte';
  import Placeholder from './Placeholder.svelte';

  let { title, items } = $props();
</script>

<section id="experience">
  <Reveal><h2>{title}</h2></Reveal>
  <Timeline {items}>
    {#snippet entry(job)}
      <div class="head">
        <div class="logo"><Placeholder label="Logo" /></div>
        <div class="title">
          <h3>{job.company}</h3>
          <p class="role">{job.role}</p>
          <p class="meta">{job.period} · {job.place}</p>
        </div>
      </div>
      <p class="blurb">{job.blurb}</p>
      <ul>
        {#each job.points as point}
          <li>{point}</li>
        {/each}
      </ul>
      <div class="tech">
        {#each job.tech as name}
          <span class="chip">{name}</span>
        {/each}
      </div>
    {/snippet}
  </Timeline>
</section>

<style>
  .head {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  .logo {
    width: 4rem;
    flex: none;
  }
  h3 {
    font-size: 1.5rem;
  }
  .role {
    color: var(--accent);
  }
  .meta {
    color: var(--muted);
    font-size: 0.9rem;
  }
  .blurb {
    margin: 1rem 0;
    color: var(--muted);
  }
  ul {
    padding-left: 1.1rem;
    display: grid;
    gap: 0.5rem;
    margin-bottom: 1.25rem;
  }
  li::marker {
    color: var(--accent);
  }
  .tech {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }
</style>
