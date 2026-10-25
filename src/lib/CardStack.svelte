<script>
  let { items, card, prev, next } = $props();
  let track = $state();
  let dragging = $state(false);
  let drag = null;

  function stepWidth() {
    const slots = track.children;
    return slots.length > 1 ? slots[1].offsetLeft - slots[0].offsetLeft : slots[0].offsetWidth;
  }

  function step(direction) {
    track.scrollBy({ left: direction * stepWidth(), behavior: 'smooth' });
  }

  function down(event) {
    if (event.pointerType !== 'mouse' || event.button !== 0) return;
    drag = { x: event.clientX, left: track.scrollLeft, moved: false };
  }

  function move(event) {
    if (!drag) return;
    const delta = event.clientX - drag.x;
    if (!drag.moved) {
      if (Math.abs(delta) < 5) return;
      drag.moved = true;
      dragging = true;
      track.setPointerCapture(event.pointerId);
    }
    track.scrollLeft = drag.left - delta;
  }

  function up() {
    if (!drag) return;
    const moved = drag.moved;
    drag = null;
    dragging = false;
    if (moved) {
      const width = stepWidth();
      const max = track.scrollWidth - track.clientWidth;
      const points = [max, ...Array.from({ length: Math.floor(max / width) + 1 }, (_, index) => index * width)];
      const left = points.reduce((best, point) => (Math.abs(point - track.scrollLeft) < Math.abs(best - track.scrollLeft) ? point : best));
      track.scrollTo({ left, behavior: 'smooth' });
    }
  }
</script>

<div class="stack">
  <div
    class="track"
    class:dragging
    bind:this={track}
    onpointerdown={down}
    onpointermove={move}
    onpointerup={up}
    onpointercancel={up}
  >
    {#each items as item, index}
      <div class="slot" style="--z:{items.length - index}">{@render card(item, index)}</div>
    {/each}
  </div>
  <div class="nav">
    <button onclick={() => step(-1)} aria-label={prev}>←</button>
    <button onclick={() => step(1)} aria-label={next}>→</button>
  </div>
</div>

<style>
  .track {
    display: flex;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    padding: 2.5rem 1.5rem 1.5rem;
    margin: -2.5rem -1.5rem -0.5rem;
    scroll-padding-inline: 1.5rem;
    scrollbar-width: none;
    cursor: grab;
    user-select: none;
  }
  .track::-webkit-scrollbar {
    display: none;
  }
  .track.dragging {
    scroll-snap-type: none;
    cursor: grabbing;
  }
  .track :global(img) {
    pointer-events: none;
  }
  .slot {
    flex: none;
    width: min(17rem, 78vw);
    margin-right: -1.5rem;
    scroll-snap-align: start;
    z-index: var(--z);
    transition: filter 0.3s;
  }
  .track:has(.slot:hover) .slot:not(:hover) {
    filter: brightness(0.7) saturate(0.5) blur(1.5px);
  }
  .slot:hover {
    z-index: 100;
  }
  .slot:last-child {
    margin-right: 0;
    scroll-snap-align: end;
  }
  .nav {
    display: flex;
    justify-content: flex-end;
    gap: 0.5rem;
    margin-top: 0.5rem;
  }
  button {
    width: 2.2rem;
    height: 2.2rem;
    font: inherit;
    color: var(--accent);
    background: var(--surface);
    border: 1px solid var(--accent);
    border-radius: 50%;
    cursor: pointer;
    transition: background 0.3s, color 0.3s;
  }
  button:hover {
    background: var(--accent);
    color: var(--bg);
  }
</style>
