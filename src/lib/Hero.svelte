<script>
  import { fly, fade, scale } from 'svelte/transition';
  import { tweened } from 'svelte/motion';
  import { cubicOut, backOut } from 'svelte/easing';
  import { onMount } from 'svelte';
  import RiveCanvas from './RiveCanvas.svelte';

  let { hero, scrollLabel } = $props();
  let ready = $state(false);

  const counters = $derived(hero.stats.map((stat) => tweened(0, { duration: 1800, easing: cubicOut })));

  onMount(() => {
    ready = true;
  });

  $effect(() => {
    if (!ready) return;
    hero.stats.forEach((stat, index) => counters[index].set(stat.value));
  });
</script>

<header class="hero">
  <div class="glow"></div>
  {#key hero.name}
    {#if ready}
      <div class="intro">
        <p class="eyebrow" in:fade={{ duration: 800 }}>{hero.location}</p>
        <h1 in:fly={{ y: 60, duration: 900, easing: cubicOut }}>{hero.name}</h1>
        <p class="role" in:fly={{ y: 40, duration: 900, delay: 150, easing: cubicOut }}>{hero.role}</p>
        <p class="tagline" in:fly={{ y: 30, duration: 900, delay: 300, easing: cubicOut }}>{hero.tagline}</p>
        <p class="summary" in:fade={{ duration: 900, delay: 500 }}>{hero.summary}</p>
      </div>
      <div class="hand">
        {#each hero.stats as stat, index}
          <div class="stat" in:scale={{ start: 0.6, duration: 700, delay: 500 + index * 150, easing: backOut }} style="--tilt:{(index - 1.5) * 4}deg">
            <strong>{Math.round($counters[index])}{stat.suffix}</strong>
            <span>{stat.label}</span>
          </div>
        {/each}
      </div>
    {/if}
  {/key}
  <div class="rive-slot"><RiveCanvas src="/rive/hero.riv" /></div>
  <p class="scroll">{scrollLabel} ↓</p>
</header>

<style>
  .hero {
    position: relative;
    min-height: 100svh;
    max-width: 1100px;
    margin: 0 auto;
    padding: 6rem 1.25rem 4rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 3rem;
  }
  .glow {
    position: absolute;
    inset: -20% -10% auto auto;
    width: 60vw;
    height: 60vw;
    max-width: 700px;
    max-height: 700px;
    border-radius: 50%;
    background: radial-gradient(circle, rgb(var(--glow) / 0.35), transparent 65%);
    filter: blur(40px);
    pointer-events: none;
    animation: drift 12s ease-in-out infinite alternate;
  }
  @keyframes drift {
    to {
      transform: translate(-6%, 8%) scale(1.1);
    }
  }
  .eyebrow {
    font-family: 'JetBrains Mono', monospace;
    color: var(--accent);
    letter-spacing: 0.15em;
    text-transform: uppercase;
    font-size: 0.85rem;
  }
  h1 {
    font-size: clamp(2.6rem, 8vw, 5.5rem);
    line-height: 1.05;
    letter-spacing: -0.03em;
    background: linear-gradient(90deg, var(--text), var(--accent-2));
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }
  .role {
    font-size: clamp(1.2rem, 3vw, 1.7rem);
    color: var(--accent);
    margin-top: 0.4rem;
  }
  .tagline {
    font-size: 1.2rem;
    margin-top: 1.2rem;
  }
  .summary {
    max-width: 62ch;
    color: var(--muted);
    margin-top: 1rem;
  }
  .hand {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 1rem;
    position: relative;
    z-index: 1;
  }
  .stat {
    background: var(--surface);
    border: 1px solid rgb(var(--glow) / 0.35);
    border-radius: 1rem;
    padding: 1.2rem;
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
    transform: rotate(var(--tilt));
    transition: transform 0.3s, border-color 0.3s;
  }
  .stat:hover {
    transform: rotate(0) translateY(-8px);
    border-color: var(--accent);
  }
  .stat strong {
    font-size: 2.2rem;
    color: var(--accent-2);
    line-height: 1;
  }
  .stat span {
    font-size: 0.85rem;
    color: var(--muted);
  }
  .rive-slot {
    position: absolute;
    right: 1.25rem;
    top: 6rem;
    width: min(320px, 40vw);
    aspect-ratio: 1;
    pointer-events: none;
  }
  .scroll {
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.8rem;
    color: var(--muted);
    animation: bob 2s ease-in-out infinite;
  }
  @keyframes bob {
    50% {
      transform: translateY(6px);
    }
  }
  @media (prefers-reduced-motion: reduce) {
    .glow,
    .scroll {
      animation: none;
    }
  }
</style>
