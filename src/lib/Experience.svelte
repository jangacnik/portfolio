<script>
  import Reveal from './Reveal.svelte';
  import Timeline from './Timeline.svelte';
  import Card from './Card.svelte';
  import CardStack from './CardStack.svelte';
  import Placeholder from './Placeholder.svelte';

  let { title, items, ui } = $props();

  const asPhoto = (photo) => (typeof photo === 'string' ? { src: photo } : photo);

  function cardsOf(job) {
    const numbered = (group, kind, tone, icon, texts, photos) =>
      texts.map(({ title, text }, index) => ({ type: 'text', group, kind, tone, icon, title, text, photo: asPhoto(photos[index]), pt: `${index + 1}/${texts.length}` }));
    return [
      { type: 'company', group: 'company', job },
      ...numbered('responsibilities', ui.responsibility, 'blue', 'bulb', job.responsibilities, job.photos.responsibilities),
      ...numbered('achievements', ui.achievement, 'red', 'trophy', job.achievements, job.photos.achievements),
      { type: 'tech', group: 'tech', job },
    ];
  }
</script>

<section id="experience">
  <Reveal><h2>{title}</h2></Reveal>
  <Timeline {items}>
    {#snippet entry(job)}
      <h3 class="period">{job.period} · {job.place}</h3>
      <CardStack items={cardsOf(job)} prev={ui.prev} next={ui.next} groupOf={(item) => item.group}>
        {#snippet card(item)}
          {#if item.type === 'company'}
            <Card title={item.job.company} kind={item.job.role} footer={item.job.place} date={item.job.period} tone="gold">
              {#snippet art()}<Placeholder label={item.job.company} src={item.job.photos.company} />{/snippet}
              {item.job.blurb}
            </Card>
          {:else if item.type === 'text'}
            <Card title={item.title} kind={item.kind} pt={item.pt} tone={item.tone} icon={item.icon} footer={`${job.company} · ${item.pt}`}>
              {#snippet art()}<Placeholder label={item.title} src={item.photo.src} fit={item.photo.fit} backdrop={item.photo.background} />{/snippet}
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
