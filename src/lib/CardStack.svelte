<script>
  let { items, card, prev, next, groupOf = () => undefined } = $props();
  let track = $state();
  let dragging = $state(false);
  let expanded = $state({});
  let drag = null;
  let suppressClick = false;

  const counts = $derived(
    items.reduce((total, item) => {
      const group = groupOf(item);
      if (group) total[group] = (total[group] ?? 0) + 1;
      return total;
    }, {})
  );

  const isGroupable = (item) => Boolean(groupOf(item)) && counts[groupOf(item)] > 1;

  const isStacked = (item) => isGroupable(item) && !expanded[groupOf(item)];

  const isFirstOfGroup = (index) => index === 0 || groupOf(items[index - 1]) !== groupOf(items[index]);

  function gap(index) {
    if (index === items.length - 1) return '0px';
    if (groupOf(items[index]) !== groupOf(items[index + 1])) return '1.5rem';
    return isStacked(items[index]) ? 'calc(1.6rem - var(--w))' : '-1.5rem';
  }

  function toggle(item) {
    if (suppressClick || !isGroupable(item)) return;
    expanded[groupOf(item)] = isStacked(item);
  }

  function snapPoints() {
    const max = track.scrollWidth - track.clientWidth;
    const padding = parseFloat(getComputedStyle(track).scrollPaddingInlineStart) || 0;
    const starts = [...track.children]
      .filter((_, index) => !isStacked(items[index]) || isFirstOfGroup(index))
      .map((slot) => Math.min(max, Math.max(0, slot.offsetLeft - padding)));
    return [...new Set([...starts, max])].sort((a, b) => a - b);
  }

  function step(direction) {
    const points = snapPoints();
    const current = track.scrollLeft;
    const target = direction > 0 ? points.find((point) => point > current + 4) : points.findLast((point) => point < current - 4);
    if (target !== undefined) track.scrollTo({ left: target, behavior: 'smooth' });
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
    if (!moved) return;
    suppressClick = true;
    setTimeout(() => (suppressClick = false));
    const left = snapPoints().reduce((best, point) => (Math.abs(point - track.scrollLeft) < Math.abs(best - track.scrollLeft) ? point : best));
    track.scrollTo({ left, behavior: 'smooth' });
  }
</script>

<div class="stack">
  <!-- svelte-ignore a11y_no_static_element_interactions -->
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
      {@const stacked = isStacked(item)}
      <!-- svelte-ignore a11y_no_noninteractive_tabindex, a11y_no_noninteractive_element_interactions, a11y_no_static_element_interactions -->
      <div
        class="slot"
        class:stacked
        class:first={isFirstOfGroup(index)}
        style="--z:{items.length - index}; margin-right:{gap(index)}"
        class:groupable={isGroupable(item)}
        role={isGroupable(item) ? 'button' : undefined}
        tabindex={isGroupable(item) ? 0 : undefined}
        onclick={() => toggle(item)}
        onkeydown={(event) => (event.key === 'Enter' || event.key === ' ') && toggle(item)}
      >
        {@render card(item, index)}
      </div>
    {/each}
  </div>
  <div class="nav">
    <button onclick={() => step(-1)} aria-label={prev}>←</button>
    <button onclick={() => step(1)} aria-label={next}>→</button>
  </div>
</div>

<style>
  .stack {
    --w: min(17rem, 78vw);
  }
  .track {
    position: relative;
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
    width: var(--w);
    scroll-snap-align: start;
    z-index: var(--z);
    transition: margin-right 0.5s cubic-bezier(0.22, 1, 0.36, 1);
  }
  .slot:last-child {
    scroll-snap-align: end;
  }
  .slot:not(.stacked):hover {
    z-index: 100;
  }
  .slot.groupable {
    cursor: pointer;
  }
  .slot.stacked:not(.first) {
    scroll-snap-align: none;
  }
  .slot.stacked :global(.card:hover) {
    transform: none;
  }
  .slot.stacked :global(.card:hover::after) {
    opacity: 0;
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
