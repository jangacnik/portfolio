<script>
  import { fly, fade } from 'svelte/transition';
  import { tweened } from 'svelte/motion';
  import { cubicOut } from 'svelte/easing';
  import { onMount } from 'svelte';
  import RiveCanvas from './RiveCanvas.svelte';
  import Placeholder from './Placeholder.svelte';

  let { hero, scrollLabel } = $props();
  let ready = $state(false);

  const counters = $derived(hero.stats.map(() => tweened(0, { duration: 1800, easing: cubicOut })));

  onMount(() => {
    ready = true;
  });

  $effect(() => {
    if (!ready) return;
    hero.stats.forEach((stat, index) => counters[index].set(stat.value));
  });
</script>

<header class="hero">
  {#if ready}
    <div class="top">
      <div class="intro">
        {#key hero.name}
          <p class="eyebrow" in:fade={{ duration: 800 }}>{hero.location}</p>
          <h1 in:fly={{ y: 40, duration: 900, easing: cubicOut }}>{hero.name}</h1>
          <p class="role" in:fly={{ y: 30, duration: 900, delay: 150, easing: cubicOut }}>{hero.role}</p>
          <p class="tagline" in:fly={{ y: 20, duration: 900, delay: 300, easing: cubicOut }}>{hero.tagline}</p>
          <p class="summary" in:fade={{ duration: 900, delay: 500 }}>{hero.summary}</p>
        {/key}
      </div>
      <div class="portrait" in:fade={{ duration: 1000, delay: 300 }}>
        <Placeholder label="Portrait" ratio="4 / 5" />
        <div class="rive"><RiveCanvas src="/rive/hero.riv" /></div>
      </div>
    </div>
    <dl class="stats">
      {#each hero.stats as stat, index}
        <div in:fly={{ y: 20, duration: 700, delay: 500 + index * 120, easing: cubicOut }}>
          <dt>{Math.round($counters[index])}{stat.suffix}</dt>
          <dd>{stat.label}</dd>
        </div>
      {/each}
    </dl>
  {/if}
  <p class="scroll">{scrollLabel} ↓</p>
</header>

<style>
  .hero {
    min-height: 100svh;
    max-width: 960px;
    margin: 0 auto;
    padding: 6rem 1.25rem 3rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 3rem;
  }
  .top {
    display: grid;
    grid-template-columns: 1.6fr 1fr;
    gap: 3rem;
    align-items: center;
  }
  .eyebrow {
    color: var(--accent);
    letter-spacing: 0.12em;
    text-transform: uppercase;
    font-size: 0.8rem;
  }
  h1 {
    font-size: clamp(2.4rem, 7vw, 4.5rem);
    line-height: 1.05;
    letter-spacing: -0.02em;
    margin-top: 0.5rem;
  }
  .role {
    font-size: 1.25rem;
    color: var(--accent);
    margin-top: 0.5rem;
  }
  .tagline {
    margin-top: 1.25rem;
    font-size: 1.1rem;
  }
  .summary {
    max-width: 58ch;
    color: var(--muted);
    margin-top: 1rem;
  }
  .portrait {
    position: relative;
  }
  .rive {
    position: absolute;
    inset: 0;
    pointer-events: none;
  }
  .stats {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 1.5rem;
    padding-top: 1.5rem;
    border-top: 1px solid rgb(var(--glow) / 0.2);
  }
  dt {
    font-family: 'Fraunces', Georgia, serif;
    font-size: 2.2rem;
    line-height: 1.1;
    color: var(--accent);
  }
  dd {
    margin: 0;
    font-size: 0.85rem;
    color: var(--muted);
  }
  .scroll {
    font-size: 0.8rem;
    color: var(--muted);
    animation: bob 2s ease-in-out infinite;
  }
  @keyframes bob {
    50% {
      transform: translateY(5px);
    }
  }
  @media (max-width: 720px) {
    .top {
      grid-template-columns: 1fr;
    }
    .portrait {
      max-width: 260px;
    }
  }
  @media (prefers-reduced-motion: reduce) {
    .scroll {
      animation: none;
    }
  }
</style>
