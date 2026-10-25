<script>
  import Reveal from './Reveal.svelte';
  import TiltCard from './TiltCard.svelte';

  let { title, groups } = $props();
</script>

<section id="skills">
  <Reveal><h2>{title}</h2></Reveal>
  <div class="grid">
    {#each groups as group, index (group.type)}
      <Reveal delay={index * 80} y={60}>
        <TiltCard rarity="common">
          <div class="orb" aria-hidden="true">{group.glyph}</div>
          <h3>{group.type}</h3>
          <div class="items">
            {#each group.items as item}
              <span class="chip">{item}</span>
            {/each}
          </div>
        </TiltCard>
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
  .orb {
    width: 3rem;
    height: 3rem;
    display: grid;
    place-items: center;
    font-size: 1.4rem;
    border-radius: 50%;
    background: radial-gradient(circle at 30% 30%, rgb(var(--glow) / 0.5), rgb(var(--glow) / 0.1));
    box-shadow: 0 0 20px rgb(var(--glow) / 0.4);
    margin-bottom: 0.8rem;
  }
  h3 {
    margin-bottom: 0.8rem;
  }
  .items {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }
</style>
