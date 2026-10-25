<script>
  import Reveal from './Reveal.svelte';
  import Card from './Card.svelte';
  import Placeholder from './Placeholder.svelte';

  let { title, items, aside } = $props();
</script>

<section id="education">
  <div class="split">
    <div>
      <Reveal><h2>{title}</h2></Reveal>
      <Reveal>
        <div class="pile">
          {#each items as school, index}
            <div class="slot" style="--z:{items.length - index}">
              <Card title={school.school} kind={school.degree} footer={school.faculty} date={school.period} tone="white">
                {#snippet art()}<Placeholder label={school.school} src={school.photo} />{/snippet}
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
    --width: min(21rem, 78vw);
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
    margin-left: 3rem;
  }
  .slot:hover {
    z-index: 100;
  }
  .thesis {
    font-style: italic;
  }
</style>
