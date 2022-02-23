<template>
  <Panel title="Youtube Video">
    <template #body>
      <div class="youtube">
        <youtube-iframe
          :video-id="youtubeId"
          :player-width="'700px'"
          :player-height="'300px'"
        ></youtube-iframe>
      </div>
    </template>
  </Panel>
</template>

<script>
export default {
  name: 'YouTube',
  props: ['youtubeId'],
};
</script>

<style>
.youtube {
  object-fit: cover;
}

@media only screen and (max-width: 87.5em) {
  .youtube {
    overflow: hidden;
  }
}
</style>
