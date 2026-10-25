<script>
  import { spring } from 'svelte/motion';

  let { rarity = 'common', children } = $props();

  const tilt = spring({ x: 0, y: 0, mx: 50, my: 50 }, { stiffness: 0.1, damping: 0.4 });

  function move(event) {
    const box = event.currentTarget.getBoundingClientRect();
    const px = (event.clientX - box.left) / box.width;
    const py = (event.clientY - box.top) / box.height;
    tilt.set({ x: (0.5 - py) * 10, y: (px - 0.5) * 10, mx: px * 100, my: py * 100 });
  }

  function leave() {
    tilt.set({ x: 0, y: 0, mx: 50, my: 50 });
  }
</script>

<div
  class="card {rarity}"
  role="presentation"
  onpointermove={move}
  onpointerleave={leave}
  style="--rx:{$tilt.x}deg; --ry:{$tilt.y}deg; --mx:{$tilt.mx}%; --my:{$tilt.my}%"
>
  <div class="inner">{@render children()}</div>
  <div class="holo"></div>
</div>

<style>
  .card {
    position: relative;
    border-radius: 1.25rem;
    padding: 3px;
    background: linear-gradient(135deg, var(--c1), var(--c2));
    transform: perspective(900px) rotateX(var(--rx)) rotateY(var(--ry));
    transition: box-shadow 0.3s;
    box-shadow: 0 10px 40px -15px rgb(var(--glow) / 0.5);
  }
  .card:hover {
    box-shadow: 0 20px 60px -10px rgb(var(--glow) / 0.8);
  }
  .common {
    --c1: var(--muted);
    --c2: var(--surface);
  }
  .epic {
    --c1: var(--accent);
    --c2: var(--accent-2);
  }
  .legendary {
    --c1: var(--accent-2);
    --c2: var(--accent);
  }
  .inner {
    position: relative;
    z-index: 1;
    height: 100%;
    border-radius: calc(1.25rem - 3px);
    background: var(--surface);
    padding: 1.75rem;
  }
  .holo {
    position: absolute;
    inset: 0;
    z-index: 2;
    border-radius: inherit;
    pointer-events: none;
    opacity: 0;
    mix-blend-mode: color-dodge;
    background: radial-gradient(circle at var(--mx) var(--my), rgb(255 255 255 / 0.35), transparent 45%),
      linear-gradient(115deg, transparent 20%, rgb(var(--glow) / 0.25) 40%, rgb(255 210 77 / 0.2) 50%, transparent 70%);
    transition: opacity 0.3s;
  }
  .card:hover .holo {
    opacity: 1;
  }
  @media (prefers-reduced-motion: reduce) {
    .card {
      transform: none;
    }
  }
</style>
