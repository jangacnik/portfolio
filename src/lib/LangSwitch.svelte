<script>
  import { languages } from './content.js';
  import { lang, setLang } from './lang.svelte.js';
</script>

<nav aria-label="Language">
  {#each languages as option}
    <button class:active={lang.code === option.code} onclick={() => setLang(option.code)}>{option.label}</button>
  {/each}
</nav>

<style>
  nav {
    position: fixed;
    top: 1rem;
    right: 1rem;
    z-index: 10;
    display: flex;
    gap: 0.25rem;
    padding: 0.3rem;
    border-radius: 999px;
    background: rgb(var(--glow) / 0.12);
    backdrop-filter: blur(12px);
    border: 1px solid rgb(var(--glow) / 0.35);
  }
  button {
    font: inherit;
    font-size: 0.85rem;
    color: var(--muted);
    background: none;
    border: none;
    padding: 0.35rem 0.8rem;
    border-radius: 999px;
    cursor: pointer;
    transition: background 0.3s, color 0.3s;
  }
  button.active {
    background: var(--accent);
    color: var(--bg);
    font-weight: 700;
  }
</style>
