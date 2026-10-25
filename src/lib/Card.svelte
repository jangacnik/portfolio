<script>
  let { title, badge = null, kind = null, footer = null, date = null, pt = null, tone = 'white', tall = false, icon = null, pips = 0, art = null, children } = $props();

  const icons = {
    white: ['M8 12a4 4 0 1 0 8 0 4 4 0 1 0-8 0', 'M12 2.5v3M12 18.5v3M2.5 12h3M18.5 12h3M5.3 5.3l2.1 2.1M16.6 16.6l2.1 2.1M5.3 18.7l2.1-2.1M16.6 7.4l2.1-2.1'],
    blue: ['M12 3c3.5 4.5 6 7.5 6 11a6 6 0 0 1-12 0c0-3.5 2.5-6.5 6-11z'],
    black: ['M10.3 5.2L10.4 2.1L13.6 2.1L13.7 5.2L15.6 6.0L17.9 3.9L20.1 6.1L18.0 8.4L18.8 10.3L21.9 10.4L21.9 13.6L18.8 13.7L18.0 15.6L20.1 17.9L17.9 20.1L15.6 18.0L13.7 18.8L13.6 21.9L10.4 21.9L10.3 18.8L8.4 18.0L6.1 20.1L3.9 17.9L6.0 15.6L5.2 13.7L2.1 13.6L2.1 10.4L5.2 10.3L6.0 8.4L3.9 6.1L6.1 3.9L8.4 6.0z', 'M9 12a3 3 0 1 0 6 0 3 3 0 1 0-6 0'],
    red: ['M12 3c1 3.5 5 5.5 5 10a5 5 0 0 1-10 0c0-2 1-3.2 2-4.2.2 1.4.8 2 1.6 2.4C10.2 8.8 10.6 5.8 12 3z'],
    green: ['M5 19C5 10 10 5 20 4c0 10-5 15-15 15z', 'M5 19l8-8'],
    gold: ['M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z'],
    bean: ['M5.64 18.36A9 5.5 -45 0 1 18.36 5.64A9 5.5 -45 0 1 5.64 18.36z', 'M7 17c4-1 3-4 5-5s1-4 5-5'],
    bulb: ['M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2.1h5c0-.9.4-1.6 1-2.1A6 6 0 0 0 12 3z', 'M9.5 19h5M10.5 21.5h3'],
    trophy: ['M8 4h8v6a4 4 0 0 1-8 0z', 'M8 6H5v2a3 3 0 0 0 3 3M16 6h3v2a3 3 0 0 1-3 3', 'M12 14v4M9 20h6M10 18h4'],
    speech: ['M4 5h16v11h-9l-4 4v-4H4z', 'M8 9.5h8M8 12.5h5'],
    server: ['M4 4h16v6H4z', 'M4 14h16v6H4z', 'M7.5 7h.01M7.5 17h.01'],
    data: ['M7 3h7l4 4v14H7z', 'M14 3v4h4', 'M10 12h5M10 16h5'],
    cloud: ['M6.5 18a4 4 0 0 1-.4-7.98 6 6 0 0 1 11.5 1.5A3.3 3.3 0 0 1 17.5 18z'],
    artifact: ['M12 3l7.8 4.5v9L12 21l-7.8-4.5v-9z', 'M9 12a3 3 0 1 0 6 0 3 3 0 1 0-6 0'],
  };
</script>

<article class="card {tone}" class:tall>
  <div class="frame">
    <header class="bar name">
      <h3>{title}</h3>
      {#if badge !== null || pips}
        <span class="mana">
          {#if badge !== null}<span class="pip generic">{badge}</span>{/if}
          {#each Array(pips) as _}
            <span class="pip colored">
              <svg viewBox="0 0 24 24" aria-hidden="true">{#each icons[icon ?? tone] as d}<path {d} />{/each}</svg>
            </span>
          {/each}
        </span>
      {/if}
    </header>
    {#if art}<div class="art">{@render art()}</div>{/if}
    {#if kind}
      <div class="bar type"><span>{kind}</span><svg class="set" class:large={icon === 'bean'} viewBox="0 0 24 24" aria-hidden="true">{#each icons[icon ?? tone] as d}<path {d} />{/each}</svg></div>
    {/if}
    <div class="text">{@render children()}</div>
    {#if date}<span class="date">{date}</span>{/if}
    {#if pt}<span class="pt">{pt}</span>{/if}
  </div>
  {#if footer}<footer>{footer}</footer>{/if}
</article>

<style>
  .card {
    --ink: #1b1612;
    position: relative;
    width: 100%;
    aspect-ratio: 63 / 88;
    container-type: inline-size;
    padding: 0.5rem 0.5rem 1.15rem;
    border-radius: 1rem;
    background: #151110;
    overflow: hidden;
    color: var(--ink);
    transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1);
  }
  .white {
    --pip: #f6efd0;
    --frame: #d9d2bd;
    --frame-dark: #8e8672;
    --paper: #f7f3e3;
  }
  .blue {
    --pip: #a9cdea;
    --frame: #6f9ccd;
    --frame-dark: #2f5f8f;
    --paper: #dde8f1;
  }
  .black {
    --pip: #b9aea6;
    --frame: #6a6266;
    --frame-dark: #2d282b;
    --paper: #d9d2cd;
  }
  .red {
    --pip: #eaa493;
    --frame: #d0694f;
    --frame-dark: #8f3524;
    --paper: #f0ddd3;
  }
  .green {
    --pip: #a7cfa8;
    --frame: #5f9768;
    --frame-dark: #2f6039;
    --paper: #dfe7d2;
  }
  .gold {
    --pip: #e8d089;
    --frame: #d2ae55;
    --frame-dark: #8a6a1e;
    --paper: #f0e4bc;
  }
  .artifact {
    --pip: #cdc7bd;
    --frame: #a3abb0;
    --frame-dark: #5a6368;
    --paper: #e7e9e9;
  }
  .card::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(115deg, transparent 30%, rgb(255 255 255 / 0.5) 50%, transparent 70%);
    background-size: 250% 100%;
    background-position: 120% 0;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.3s, background-position 0.9s;
  }
  .card:hover {
    transform: translateY(-14px) scale(1.06) rotate(-1.5deg);
  }
  .card:hover::after {
    opacity: 1;
    background-position: -20% 0;
  }
  .frame {
    position: relative;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
    padding: 0.4rem 0.4rem 0.5rem;
    border-radius: 0.55rem 0.55rem 0.9rem 0.9rem;
    background: linear-gradient(160deg, var(--frame), color-mix(in srgb, var(--frame) 70%, var(--frame-dark)));
    box-shadow: inset 0 0 0 1px rgb(0 0 0 / 0.5);
  }
  .bar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.4rem;
    min-height: 1.7rem;
    padding: 0.1rem 0.5rem;
    border-radius: 0.17rem / 0.24rem;
    background: linear-gradient(to bottom, var(--paper), color-mix(in srgb, var(--paper) 80%, var(--frame)));
    box-shadow: 0 0 0 1px var(--frame-dark);
  }
  h3 {
    min-width: 0;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: clamp(0.8rem, 5.6cqw, 1.05rem);
    font-weight: 600;
    line-height: 1.2;
  }
  .mana {
    flex: none;
    display: flex;
    gap: 0.3rem;
  }
  .pip {
    display: grid;
    place-items: center;
    width: 1.2rem;
    height: 1.2rem;
    border-radius: 50%;
    box-shadow: 0 0 0 1px #1b1612, -1px 2px 2px rgb(0 0 0 / 0.45);
    color: #111;
    font-size: 0.783rem;
    font-weight: 700;
    line-height: 1;
  }
  .generic {
    padding-top: 0.2rem;
    background: #cdc7bd;
  }
  .colored {
    background: var(--pip);
  }
  .pip svg {
    width: 0.75rem;
    height: 0.75rem;
    fill: none;
    stroke: #111;
    stroke-width: 2.2;
    stroke-linecap: round;
    stroke-linejoin: round;
  }
  .art {
    aspect-ratio: 1.55;
    border: 2px solid var(--frame-dark);
    outline: 1px solid rgb(0 0 0 / 0.55);
    box-shadow: 0 0 0 2px color-mix(in srgb, var(--frame) 60%, #fff);
    background: #000;
    overflow: hidden;
  }
  .tall .art {
    aspect-ratio: auto;
    flex: 1;
    min-height: 0;
  }
  .tall .text {
    flex: none;
  }
  .type {
    border-radius: 0.33rem / 0.47rem;
    font-size: 0.7rem;
    font-weight: 500;
    line-height: 1.2;
  }
  .set.large {
    width: 1.4rem;
    height: 1.4rem;
  }
  .set {
    flex: none;
    width: 1rem;
    height: 1rem;
    fill: none;
    stroke: var(--frame-dark);
    stroke-width: 2;
    stroke-linecap: round;
    stroke-linejoin: round;
  }
  .text {
    flex: 1;
    min-height: 0;
    overflow: hidden;
    padding: 0.5rem 0.55rem 1.2rem;
    border-radius: 0.2rem;
    background: var(--paper);
    box-shadow: 0 0 0 1px var(--frame-dark);
    font-size: clamp(0.66rem, 4.7cqw, 0.9rem);
    line-height: 1.35;
  }
  .date {
    position: absolute;
    left: 0.95rem;
    bottom: 0.7rem;
    font-size: 0.9rem;
    font-weight: 700;
    letter-spacing: 0.02em;
  }
  .pt {
    position: absolute;
    right: -0.3rem;
    bottom: -0.55rem;
    min-width: 3.1rem;
    padding: 0.1rem 0.5rem;
    border: 2px solid #111;
    border-radius: 0.4rem;
    background: color-mix(in srgb, var(--frame) 80%, var(--paper));
    color: #111;
    font-size: 0.95rem;
    font-weight: 500;
    line-height: 1.25;
    text-align: center;
  }
  footer {
    position: absolute;
    left: 1.1rem;
    right: 1.1rem;
    bottom: 0.2rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #d8d2c4;
    font-size: 0.55rem;
    letter-spacing: 0.04em;
  }
</style>
