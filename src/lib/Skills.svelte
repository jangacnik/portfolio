<script>
  import Reveal from './Reveal.svelte';
  import Card from './Card.svelte';
  import CardStack from './CardStack.svelte';
  import Placeholder from './Placeholder.svelte';

  let { title, groups, ui } = $props();
  const tones = ['green', 'blue', 'black', 'red', 'white', 'artifact'];
  const pipCounts = [2, 3, 1, 3, 2, 1];
</script>

<section id="skills">
  <Reveal><h2>{title}</h2></Reveal>
  <Reveal>
    <CardStack items={groups} prev={ui.prev} next={ui.next}>
      {#snippet card(group, index)}
        <Card title={group.type} badge={group.items.length} kind={title} tone={tones[index % tones.length]} icon={group.icon} pips={pipCounts[index % pipCounts.length]} footer={`${index + 1}/${groups.length}`}>
          {#snippet art()}<Placeholder label={group.type} src={group.photo} />{/snippet}
          <div class="items">
            {#each group.items as item}
              <span class="chip">{item}</span>
            {/each}
          </div>
        </Card>
      {/snippet}
    </CardStack>
  </Reveal>
</section>

<style>
  .items {
    display: flex;
    flex-wrap: wrap;
    gap: 0.4rem;
  }
</style>
