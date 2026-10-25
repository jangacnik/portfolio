<script>
  import { content, email } from './lib/content.js';
  import { lang, applyLang } from './lib/lang.svelte.js';
  import LangSwitch from './lib/LangSwitch.svelte';
  import Hero from './lib/Hero.svelte';
  import Experience from './lib/Experience.svelte';
  import Skills from './lib/Skills.svelte';
  import Education from './lib/Education.svelte';
  import Reveal from './lib/Reveal.svelte';

  const text = $derived(content[lang.code]);

  $effect(applyLang);
</script>

<LangSwitch />

<main>
  <Hero hero={text.hero} scrollLabel={text.ui.scroll} />
  <Experience title={text.ui.experience} items={text.experience} />
  <Skills title={text.ui.skills} groups={text.skills} />
  <Education title={text.ui.education} items={text.education} />

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
  .bars {
    display: grid;
    gap: 1.4rem;
    max-width: 600px;
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
    height: 4px;
    border-radius: 999px;
    background: rgb(var(--glow) / 0.15);
    overflow: hidden;
  }
  .fill {
    height: 100%;
    width: var(--w);
    border-radius: inherit;
    background: var(--accent);
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
  }
  .cta :global(h2::after) {
    margin-inline: auto;
  }
  .mail {
    display: inline-block;
    font-size: clamp(1.2rem, 4vw, 1.8rem);
    color: var(--accent);
    text-decoration: none;
    border-bottom: 1px solid var(--accent);
    transition: opacity 0.3s;
  }
  .mail:hover {
    opacity: 0.7;
  }
  .note {
    margin-top: 1.5rem;
    color: var(--muted);
    font-size: 0.9rem;
  }
</style>
