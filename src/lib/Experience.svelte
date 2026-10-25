<script>
  import Reveal from './Reveal.svelte';
  import Timeline from './Timeline.svelte';
  import Card from './Card.svelte';
  import CardStack from './CardStack.svelte';
  import Placeholder from './Placeholder.svelte';

  let { title, items, ui } = $props();

  function cardsOf(job) {
    const numbered = (kind, tone, icon, texts, photos) =>
      texts.map(({ title, text }, index) => ({ type: 'text', kind, tone, icon, title, text, photo: photos[index], pt: `${index + 1}/${texts.length}` }));
    return [
      { type: 'company', job },
      ...numbered(ui.responsibility, 'blue', 'bulb', job.responsibilities, job.photos.responsibilities),
      ...numbered(ui.achievement, 'red', 'trophy', job.achievements, job.photos.achievements),
      { type: 'tech', job },
    ];
  }
</script>

<section id="experience">
  <Reveal><h2>{title}</h2></Reveal>
  <Timeline {items}>
    {#snippet entry(job)}
      <h3 class="period">{job.period} · {job.place}</h3>
      <CardStack items={cardsOf(job)} prev={ui.prev} next={ui.next}>
        {#snippet card(item)}
          {#if item.type === 'company'}
            <Card title={item.job.company} kind={item.job.role} footer={item.job.place} date={item.job.period} tone="gold">
              {#snippet art()}<Placeholder label={item.job.company} src={item.job.photos.company} />{/snippet}
              {item.job.blurb}
            </Card>
          {:else if item.type === 'text'}
            <Card title={item.title} kind={item.kind} pt={item.pt} tone={item.tone} icon={item.icon} footer={`${job.company} · ${item.pt}`}>
              {#snippet art()}<Placeholder label={item.title} src={item.photo} />{/snippet}
              {item.text}
            </Card>
          {:else}
            <Card title={ui.stack} kind={job.company} tone="artifact" footer={job.company}>
              <div class="tech">
                {#each item.job.tech as name}
                  <span class="chip">{name}</span>
                {/each}
              </div>
            </Card>
          {/if}
        {/snippet}
      </CardStack>
    {/snippet}
  </Timeline>
</section>

<style>
  .period {
    color: var(--accent);
    font-size: 1.1rem;
    margin-bottom: 0.25rem;
  }
  .tech {
    display: flex;
    flex-wrap: wrap;
    gap: 0.4rem;
  }
</style>
