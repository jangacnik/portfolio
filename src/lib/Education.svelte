<script>
  import Reveal from './Reveal.svelte';
  import Timeline from './Timeline.svelte';
  import Placeholder from './Placeholder.svelte';

  let { title, items } = $props();
</script>

<section id="education">
  <Reveal><h2>{title}</h2></Reveal>
  <Timeline {items}>
    {#snippet entry(school)}
      <div class="head">
        <div class="logo"><Placeholder label="Logo" /></div>
        <div>
          <h3>{school.degree}</h3>
          <p class="school">{school.school}</p>
          <p class="meta">{school.period}</p>
        </div>
      </div>
      <p class="meta">{school.faculty}</p>
      <p class="thesis">{school.thesis}</p>
    {/snippet}
  </Timeline>
</section>

<style>
  .head {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 0.75rem;
  }
  .logo {
    width: 4rem;
    flex: none;
  }
  h3 {
    font-size: 1.25rem;
  }
  .school {
    color: var(--accent);
  }
  .meta {
    color: var(--muted);
    font-size: 0.9rem;
  }
  .thesis {
    margin-top: 0.5rem;
    font-style: italic;
  }
</style>
