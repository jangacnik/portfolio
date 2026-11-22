import { umami } from './analytics.js';

// All-time unique visitors from Umami; stays null when Umami is unreachable, so callers render nothing.
export const visitors = $state({ count: null });

const json = (response) => {
  if (!response.ok) throw new Error(`HTTP ${response.status}`);
  return response.json();
};

async function loadVisitorCount() {
  const share = await fetch(`/stats/api/share/${umami.shareId}`).then(json);
  const stats = await fetch(`/stats/api/websites/${share.websiteId}/stats?startAt=0&endAt=${Date.now()}`, {
    headers: { 'x-umami-share-token': share.token },
  }).then(json);
  visitors.count = stats.visitors?.value ?? stats.visitors;
}

loadVisitorCount().catch(() => {});
