<script>
  import { fly } from 'svelte/transition';
  import { cubicOut } from 'svelte/easing';

  let { delay = 0, y = 40, children } = $props();
  let visible = $state(false);

  function inview(node) {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          visible = true;
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(node);
    return { destroy: () => observer.disconnect() };
  }
</script>

<div use:inview class="reveal">
  {#if visible}
    <div in:fly={{ y, duration: 700, delay, easing: cubicOut }}>
      {@render children()}
    </div>
  {/if}
</div>

<style>
  .reveal {
    min-height: 1px;
  }
</style>
