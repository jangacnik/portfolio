<script>
  let { label, src, position = 'center', fit = 'cover', backdrop = null } = $props();
</script>

<div class="frame" style:background={backdrop}>
  <img {src} alt={label} loading="lazy" style="object-position:{position}; object-fit:{fit}" />
</div>

<style>
  .frame {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  img {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }
</style>
