<script>
  import Reveal from './Reveal.svelte';
  import Card from './Card.svelte';
  import Placeholder from './Placeholder.svelte';

  let { title, items, aside } = $props();

  const splitDegree = (degree) => {
    const [level, ...program] = degree.split(', ');
    return { level, program: program.join(', ') };
  };
</script>

<section id="education">
  <div class="split">
    <div>
      <Reveal><h2>{title}</h2></Reveal>
      <Reveal>
        <div class="pile">
          {#each items as school, index}
            <div class="slot" style="--z:{items.length - index}">
              <Card title={school.school} kind={splitDegree(school.degree).level} footer={school.faculty} date={school.period} tone="white">
                {#snippet art()}<Placeholder label={school.school} src={school.photo} position="50% 20%" />{/snippet}
                <p class="program">{splitDegree(school.degree).program}</p>
                <p class="thesis">{school.thesis}</p>
              </Card>
            </div>
          {/each}
        </div>
      </Reveal>
    </div>
    {@render aside()}
  </div>
</section>

<style>
  .split {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(24rem, 100%), 1fr));
    gap: 3rem 4rem;
    align-items: start;
  }
  .pile {
    --shift: min(3rem, 6vw);
    --width: min(21rem, calc(100vw - 2.5rem - var(--shift)));
    --height: calc(var(--width) * 88 / 63);
    display: flex;
    flex-direction: column;
    padding-bottom: 1.5rem;
  }
  .slot {
    width: var(--width);
    z-index: var(--z);
    transition: filter 0.3s;
  }
  .pile:has(.slot:hover) .slot:not(:hover) {
    filter: brightness(0.7) saturate(0.5) blur(1.5px);
  }
  .slot + .slot {
    margin-top: calc(var(--height) / -2);
    margin-left: var(--shift);
  }
  .slot:hover {
    z-index: 100;
  }
  .program {
    margin-bottom: 0.4rem;
    font-weight: 500;
  }
  .thesis {
    font-style: italic;
  }
</style>
