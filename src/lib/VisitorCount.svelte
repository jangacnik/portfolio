<script>
  import { umami } from './analytics.js';

  let { label } = $props();
  let count = $state(null);

  const json = (response) => {
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    return response.json();
  };

  async function load() {
    const share = await fetch(`/stats/api/share/${umami.shareId}`).then(json);
    const stats = await fetch(`/stats/api/websites/${share.websiteId}/stats?startAt=0&endAt=${Date.now()}`, {
      headers: { 'x-umami-share-token': share.token },
    }).then(json);
    count = stats.visitors?.value ?? stats.visitors;
  }

  load().catch(() => {});
</script>

{#if Number.isFinite(count)}· {new Intl.NumberFormat().format(count)} {label}{/if}
