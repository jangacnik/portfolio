<script>
  import { content, mtgContent, socials, lastUpdated } from './lib/content.js';
  import SocialIcon from './lib/SocialIcon.svelte';
  import { lang, applyLang, englishOnly } from './lib/lang.svelte.js';
  import LangSwitch from './lib/LangSwitch.svelte';
  import Hero from './lib/Hero.svelte';
  import Experience from './lib/Experience.svelte';
  import Skills from './lib/Skills.svelte';
  import Education from './lib/Education.svelte';
  import Reveal from './lib/Reveal.svelte';
  import VisitorCount from './lib/VisitorCount.svelte';

  const isMtg = location.pathname.replace(/\/+$/, '') === '/mtg';
  const text = $derived(isMtg ? mtgContent : content[lang.code]);
  const updated = $derived(new Intl.DateTimeFormat(lang.code, { month: 'long', year: 'numeric' }).format(lastUpdated));

  $effect(applyLang);
  if (isMtg) document.title = 'Backend Engineer — Jan Gačnik · MTG edition';
</script>

{#if !englishOnly}
  <LangSwitch />
{/if}

<main>
  <Hero hero={text.hero} scrollLabel={text.ui.scroll} ui={text.ui} />
  <Experience title={text.ui.experience} items={text.experience} ui={text.ui} />
  <Skills title={text.ui.skills} groups={text.skills} ui={text.ui} />
  <Education title={text.ui.education} items={text.education}>
    {#snippet aside()}
      <div id="languages">
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
      </div>
    {/snippet}
  </Education>

  <section id="contact">
    <Reveal>
      <div class="cta">
        <h2>{text.contact.heading}</h2>
        <ul class="socials">
          {#each socials as social}
            <li>
              <a href={social.href} target="_blank" rel="noopener">
                <SocialIcon name={social.key} />
                {social.name}
              </a>
            </li>
          {/each}
        </ul>
        <p class="note">{text.contact.note}</p>
      </div>
    </Reveal>
  </section>
</main>

<footer class="updated">
  {text.ui.updated}: {updated} ·
  {#if isMtg}<a href="/">Standard edition</a>{:else}<a href="/mtg">MTG edition</a>{/if}
  <VisitorCount label={text.ui.visitors} source={text.ui.visitorSource} />
</footer>

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
  .socials {
    list-style: none;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.75rem;
  }
  .socials a {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.6rem 1.1rem;
    border: 1px solid var(--accent);
    border-radius: 999px;
    color: var(--accent);
    text-decoration: none;
    transition: background 0.3s, color 0.3s;
  }
  .socials a:hover {
    background: var(--accent);
    color: var(--bg);
  }
  .updated a {
    color: inherit;
  }
  .updated {
    padding: 1.5rem 1.25rem 2rem;
    text-align: center;
    font-size: 0.8rem;
    color: var(--muted);
  }
  .note {
    margin-top: 1.5rem;
    color: var(--muted);
    font-size: 0.9rem;
  }
</style>
