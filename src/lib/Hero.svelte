<script>
  import { fly, fade } from 'svelte/transition';
  import { Tween } from 'svelte/motion';
  import { cubicOut } from 'svelte/easing';
  import { onMount } from 'svelte';
  import Placeholder from './Placeholder.svelte';
  import Card from './Card.svelte';

  import { socials, birthDate } from './content.js';
  import SocialIcon from './SocialIcon.svelte';

  let { hero, scrollLabel, ui } = $props();
  const today = new Date();
  const hadBirthday = today.getMonth() > birthDate.getMonth() || (today.getMonth() === birthDate.getMonth() && today.getDate() >= birthDate.getDate());
  const age = today.getFullYear() - birthDate.getFullYear() - (hadBirthday ? 0 : 1);

  let ready = $state(false);
  let flipped = $state(false);
  const lineIndex = Math.floor(Math.random() * hero.cardTexts.length);

  const links = $derived(socials.map((social) => ({ ...social, name: social.name ?? ui.email, external: social.key !== 'email' })));

  const counters = $derived(hero.stats.map(() => new Tween(0, { duration: 1800, easing: cubicOut })));

  onMount(() => {
    ready = true;
  });

  $effect(() => {
    if (!ready) return;
    hero.stats.forEach((stat, index) => (counters[index].target = stat.value));
  });
</script>

<header class="hero">
  {#if ready}
    <div class="top">
      <div class="intro">
        {#key hero.name}
          <p class="eyebrow" in:fade={{ duration: 800 }}>{hero.location}</p>
          <h1 in:fly={{ y: 40, duration: 900, easing: cubicOut }}>{hero.name}</h1>
          <p class="role" in:fly={{ y: 30, duration: 900, delay: 150, easing: cubicOut }}>{hero.role} ·&nbsp;{age}</p>
          <p class="tagline" in:fly={{ y: 20, duration: 900, delay: 300, easing: cubicOut }}>{hero.tagline}</p>
          <p class="summary" in:fade={{ duration: 900, delay: 500 }}>{hero.summary}</p>
          <ul class="facts" in:fade={{ duration: 900, delay: 650 }}>
            {#each hero.facts as fact}
              <li><span>{fact.label}</span>{fact.value}</li>
            {/each}
          </ul>
        {/key}
      </div>
      <div class="portrait">
        <div
          class="flip"
          class:flipped
          role="button"
          tabindex="0"
          aria-pressed={flipped}
          onclick={() => (flipped = !flipped)}
          onkeydown={(event) => (event.key === 'Enter' || event.key === ' ') && (flipped = !flipped)}
        >
          <div class="inner">
            <div class="face">
              <Card title={hero.name} kind={hero.role} footer={hero.location} tone="gold" icon="bean" pt={String(age).split("").join("/")} tall>
                {#snippet art()}<Placeholder label={hero.name} src="/images/jan-alojz-gacnik.jpg" position="50% 0%" />{/snippet}
                {hero.cardTexts[lineIndex]}
              </Card>
            </div>
            <div class="face back">
              <Card title={hero.name} kind={ui.contact} footer={hero.location} tone="gold">
                <div class="back-body">
                <ul class="abilities">
                  {#each links as link}
                    <li>
                      <a href={link.href} target={link.external ? '_blank' : undefined} rel="noopener" onclick={(event) => event.stopPropagation()}>
                        <span class="loyalty" class:down={link.key === 'email'}><SocialIcon name={link.key} /></span>
                        <span class="ability">
                          <strong>{link.name}:</strong>
                          <small>{link.handle}</small>
                        </span>
                      </a>
                    </li>
                  {/each}
                </ul>
                <p class="flavor">{hero.flavor}</p>
                </div>
              </Card>
            </div>
          </div>
        </div>
        <p class="hint" in:fade={{ duration: 800, delay: 2400 }}>↻ {flipped ? ui.unflip : ui.flip}</p>
      </div>
    </div>
    <dl class="stats">
      {#each hero.stats as stat, index}
        <div in:fly={{ y: 20, duration: 700, delay: 500 + index * 120, easing: cubicOut }}>
          <dt>{Math.round(counters[index].current)}{stat.suffix}</dt>
          <dd>{stat.label}</dd>
        </div>
      {/each}
    </dl>
  {/if}
  <a class="scroll" href="#experience">
    <span class="deck" aria-hidden="true">
      {#each [0, 1, 2] as n (n)}
        <i>
          <svg viewBox="0 0 24 24"><path d="M9 8.5a3 3 0 1 0 6 0 3 3 0 1 0-6 0" /><path d="M5 20c0-3.9 3.1-6 7-6s7 2.1 7 6" /></svg>
        </i>
      {/each}
    </span>
    <span class="label">{scrollLabel}</span>
  </a>
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
    font-size: clamp(0.95rem, 4.6vw, 1.25rem);
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
  .facts {
    list-style: none;
    padding: 0;
    margin-top: 1.25rem;
    display: grid;
    gap: 0.35rem;
    font-size: 0.9rem;
  }
  .facts span {
    margin-right: 0.6rem;
    color: var(--accent);
    font-size: 0.72rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }
  .portrait {
    position: relative;
  }
  .flip {
    perspective: 1200px;
    cursor: pointer;
  }
  .inner {
    position: relative;
    transform-style: preserve-3d;
    transition: transform 0.8s cubic-bezier(0.22, 1, 0.36, 1);
    animation: enter 2.2s 0.3s backwards;
  }
  @keyframes enter {
    0% {
      transform: translateX(70vw) rotateZ(-13.6deg) rotateY(0);
      animation-timing-function: cubic-bezier(0.2, 0.5, 0.2, 1);
    }
    80% {
      transform: translateX(0) rotateZ(-13.6deg) rotateY(1080deg);
      animation-timing-function: ease-in-out;
    }
    100% {
      transform: translateX(0) rotateZ(0) rotateY(1080deg);
    }
  }
  .flipped .inner {
    transform: rotateY(180deg);
  }
  .face {
    backface-visibility: hidden;
  }
  .back {
    position: absolute;
    inset: 0;
    transform: rotateY(180deg);
  }
  .hint {
    margin-top: 0.9rem;
    text-align: center;
    font-size: 0.8rem;
    color: var(--accent);
  }
  .back-body {
    display: flex;
    flex-direction: column;
    min-height: 100%;
  }
  .flavor {
    margin-top: auto;
    padding-top: 0.5rem;
    border-top: 1px solid rgb(0 0 0 / 0.25);
    font-style: italic;
    font-size: 0.8rem;
    text-align: center;
  }
  .abilities {
    list-style: none;
    padding: 0;
    margin: -0.5rem -0.55rem 0;
  }
  .abilities li:nth-child(odd) {
    background: rgb(0 0 0 / 0.07);
  }
  .abilities a {
    display: flex;
    align-items: center;
    gap: 0.6rem;
    min-height: 3.2rem;
    padding: 0.4rem 0.55rem 0.4rem 0.4rem;
    color: inherit;
    text-decoration: none;
    transition: background 0.2s;
  }
  .abilities a:hover {
    background: rgb(255 255 255 / 0.55);
  }
  .loyalty {
    flex: none;
    display: grid;
    place-items: center;
    width: 2.6rem;
    height: 1.9rem;
    background: #1d1b1e;
    color: #f4efe0;
    clip-path: polygon(50% 0, 100% 22%, 100% 100%, 0 100%, 0 22%);
    padding-top: 0.2rem;
  }
  .loyalty.down {
    clip-path: polygon(0 0, 100% 0, 100% 78%, 50% 100%, 0 78%);
    padding: 0 0 0.2rem;
  }
  .loyalty :global(svg) {
    width: 1.1rem;
    height: 1.1rem;
  }
  .ability {
    display: grid;
    font-size: 0.82rem;
    line-height: 1.3;
  }
  .ability small {
    font-size: 0.75rem;
    overflow-wrap: anywhere;
  }
  .stats {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 1.5rem;
    padding-top: 1.5rem;
    border-top: 1px solid rgb(var(--glow) / 0.2);
  }
  dt {
    font-family: 'Merriweather', Georgia, serif;
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
    align-self: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.1rem;
    color: var(--accent);
    text-decoration: none;
    font-size: 0.95rem;
    font-weight: 700;
    letter-spacing: 0.2em;
    text-transform: uppercase;
  }
  .label::after {
    content: ' ↓';
    display: inline-block;
    animation: bob 1.6s ease-in-out infinite;
  }
  .deck {
    position: relative;
    width: 2.8rem;
    height: 3.9rem;
  }
  .deck i {
    position: absolute;
    inset: 0;
    border-radius: 0.35rem;
    border: 2px solid var(--accent);
    display: grid;
    place-items: center;
    background: color-mix(in srgb, var(--accent) 8%, #fff);
    box-shadow: 0 0 0 1.5px color-mix(in srgb, var(--accent) 45%, #fff);
  }
  .deck svg {
    width: 1.7rem;
    height: 1.7rem;
    fill: none;
    stroke: var(--accent);
    stroke-width: 1.8;
    stroke-linecap: round;
    stroke-linejoin: round;
  }
  .deck i:nth-child(1) {
    transform: translate(-5px, 5px) rotate(-5deg);
  }
  .deck i:nth-child(2) {
    transform: translate(-2px, 2px) rotate(-2deg);
  }
  .deck i:nth-child(3) {
    animation: draw 2.4s ease-in-out infinite;
  }
  .scroll:hover .deck i:nth-child(3) {
    animation-duration: 1.2s;
  }
  @keyframes draw {
    0%,
    100% {
      transform: translateY(0) rotate(0);
    }
    45% {
      transform: translateY(14px) rotate(8deg);
    }
    60% {
      transform: translateY(14px) rotate(8deg);
    }
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
      order: -1;
      width: min(300px, 100%);
      margin-inline: auto;
    }
  }
  @media (prefers-reduced-motion: reduce) {
    .inner {
      animation: none;
    }
    .label::after,
    .deck i {
      animation: none !important;
    }
  }
</style>
