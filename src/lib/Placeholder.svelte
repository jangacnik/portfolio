<script>
  let { label, ratio = null, src = null, position = 'center' } = $props();
</script>

<div class="frame" style={ratio ? `aspect-ratio:${ratio}` : undefined}>
  {#if src}
    <img {src} alt={label} loading="lazy" style="object-position:{position}" />
  {:else}
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <circle cx="9" cy="10" r="1.6" />
      <path d="m4 18 5-5 4 4 3-3 4 4" />
    </svg>
    <span>{label}</span>
  {/if}
</div>

<style>
  .frame {
    position: relative;
    display: grid;
    place-content: center;
    justify-items: center;
    gap: 0.4rem;
    width: 100%;
    height: 100%;
    overflow: hidden;
    border: 1px dashed rgb(var(--glow) / 0.35);
    background: repeating-linear-gradient(135deg, transparent 0 10px, rgb(var(--glow) / 0.05) 10px 11px);
    color: var(--muted);
    font-size: 0.75rem;
    text-align: center;
  }
  svg {
    width: 1.6rem;
    fill: none;
    stroke: currentColor;
    stroke-width: 1.4;
    stroke-linecap: round;
    stroke-linejoin: round;
  }
  img {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
</style>
