<script>
  import { content, email } from './lib/content.js';
  import { lang, applyLang } from './lib/lang.svelte.js';
  import LangSwitch from './lib/LangSwitch.svelte';
  import Hero from './lib/Hero.svelte';
  import Experience from './lib/Experience.svelte';
  import Skills from './lib/Skills.svelte';
  import Reveal from './lib/Reveal.svelte';
  import TiltCard from './lib/TiltCard.svelte';

  const text = $derived(content[lang.code]);

  $effect(applyLang);
</script>

<LangSwitch />

<main>
  <Hero hero={text.hero} scrollLabel={text.ui.scroll} />
  <Experience title={text.ui.experience} items={text.experience} />
  <Skills title={text.ui.skills} groups={text.skills} />

  <section id="education">
    <Reveal><h2>{text.ui.education}</h2></Reveal>
    <div class="pair">
      {#each text.education as entry, index (entry.degree)}
        <Reveal delay={index * 120}>
          <TiltCard rarity="common">
            <p class="period">{entry.period}</p>
            <h3>{entry.degree}</h3>
            <p>{entry.school}</p>
            <p class="faculty">{entry.faculty}</p>
            <p class="thesis">{entry.thesis}</p>
          </TiltCard>
        </Reveal>
      {/each}
    </div>
  </section>

  <section id="languages">
    <Reveal><h2>{text.ui.languages}</h2></Reveal>
    <div class="bars">
      {#each text.spoken as entry, index (entry.name)}
        <Reveal delay={index * 100}>
          <div class="bar">
            <div class="label"><strong>{entry.name}</strong><span>{entry.level}</span></div>
            <div class="track"><div class="fill" style="--w:{entry.pct}%"></div></div>
          </div>
        </Reveal>
      {/each}
    </div>
  </section>

  <section id="contact">
    <Reveal>
      <div class="cta">
        <h2>{text.contact.heading}</h2>
        <a class="mail" href="mailto:{email}">{email}</a>
        <p class="note">{text.contact.note}</p>
      </div>
    </Reveal>
  </section>
</main>

<style>
  .pair {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1.5rem;
  }
  .period {
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.8rem;
    color: var(--accent);
  }
  h3 {
    margin: 0.4rem 0;
  }
  .faculty,
  .thesis {
    color: var(--muted);
    font-size: 0.9rem;
  }
  .thesis {
    margin-top: 0.8rem;
    font-style: italic;
  }
  .bars {
    display: grid;
    gap: 1.4rem;
    max-width: 640px;
  }
  .label {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    flex-wrap: wrap;
    margin-bottom: 0.4rem;
  }
  .label span {
    color: var(--muted);
    font-size: 0.9rem;
  }
  .track {
    height: 10px;
    border-radius: 999px;
    background: var(--surface);
    overflow: hidden;
  }
  .fill {
    height: 100%;
    width: var(--w);
    border-radius: inherit;
    background: linear-gradient(90deg, var(--accent), var(--accent-2));
    transform-origin: left;
    animation: grow 1.4s cubic-bezier(0.22, 1, 0.36, 1) both;
  }
  @keyframes grow {
    from {
      transform: scaleX(0);
    }
  }
  .cta {
    text-align: center;
    padding: 3rem 1rem;
    border-radius: 2rem;
    background: radial-gradient(ellipse at center, rgb(var(--glow) / 0.2), transparent 70%);
  }
  .cta :global(h2::after) {
    margin-inline: auto;
  }
  .mail {
    display: inline-block;
    font-size: clamp(1.2rem, 4vw, 2rem);
    color: var(--accent);
    text-decoration: none;
    border-bottom: 2px solid var(--accent-2);
    transition: color 0.3s;
  }
  .mail:hover {
    color: var(--accent-2);
  }
  .note {
    margin-top: 1.5rem;
    color: var(--muted);
    font-size: 0.9rem;
  }
</style>
