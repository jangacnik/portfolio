<script>
  import { onMount, tick } from 'svelte';
  import { Rive } from '@rive-app/canvas';

  let { src, stateMachine = null } = $props();
  let canvas = $state();
  let available = $state(false);

  onMount(() => {
    let rive;
    fetch(src, { method: 'HEAD' }).then((response) => {
      if (!response.ok || response.headers.get('content-type')?.includes('html')) return;
      available = true;
      tick().then(() => {
        rive = new Rive({
          src,
          canvas,
          autoplay: true,
          stateMachines: stateMachine ?? undefined,
          onLoad: () => rive.resizeDrawingSurfaceToCanvas(),
        });
      });
    });
    return () => rive?.cleanup();
  });
</script>

{#if available}
  <canvas bind:this={canvas} aria-hidden="true"></canvas>
{/if}

<style>
  canvas {
    width: 100%;
    height: 100%;
  }
</style>
