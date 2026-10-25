<script>
  import Reveal from './Reveal.svelte';
  import TiltCard from './TiltCard.svelte';

  let { title, items } = $props();
</script>

<section id="experience">
  <Reveal><h2>{title}</h2></Reveal>
  <div class="deck">
    {#each items as job, index (job.company)}
      <Reveal delay={index * 120}>
        <TiltCard rarity={job.rarity}>
          <div class="head">
            <div>
              <h3>{job.company}</h3>
              <p class="role">{job.role}</p>
            </div>
            <div class="meta">
              <span>{job.period}</span>
              <span>{job.place}</span>
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
        </TiltCard>
      </Reveal>
    {/each}
  </div>
</section>

<style>
  .deck {
    display: grid;
    gap: 2.5rem;
  }
  .head {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    flex-wrap: wrap;
  }
  h3 {
    font-size: 1.8rem;
  }
  .role {
    color: var(--accent);
  }
  .meta {
    display: flex;
    flex-direction: column;
    text-align: right;
    color: var(--muted);
    font-size: 0.9rem;
  }
  .blurb {
    margin: 1rem 0;
    color: var(--muted);
  }
  ul {
    padding-left: 1.2rem;
    display: grid;
    gap: 0.5rem;
    margin-bottom: 1.5rem;
  }
  li::marker {
    color: var(--accent);
  }
  .tech {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }
  @media (max-width: 600px) {
    .meta {
      text-align: left;
    }
  }
</style>
