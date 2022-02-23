<template>
  <div class="container-fluid mt-5">
    <div class="row">
      <div class="col-md-6">
        <SongMetadata :song="song" />
      </div>
      <div class="col-md-6">
        <YouTube :youtubeId="song.youtubeId" />
      </div>
    </div>

    <div class="row">
      <div class="col-md-6">
        <Tabs :song="song" />
      </div>
      <div class="col-md-6">
        <Lyrics :song="song" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

import Tabs from '@/components/ViewSong/Tabs.vue';
import Lyrics from '@/components/ViewSong/Lyrics.vue';
import YouTube from '@/components/ViewSong/YouTube.vue';
import { createHistory } from '@/services/songhistoryService';
import SongMetadata from '@/components/ViewSong/SongMetadata.vue';

export default {
  name: 'ViewSong',
  components: {
    Tabs,
    Lyrics,
    YouTube,
    SongMetadata,
  },
  computed: {
    ...mapGetters(['song', 'user']),
    songId() {
      return this.$route.params.id;
    },
  },
  methods: mapActions(['getSong']),
  async mounted() {
    this.getSong(this.songId);

    if (this.user) {
      try {
        await createHistory({
          song: this.songId,
        });
      } catch (err) {
        console.log(err);
      }
    }
  },
  watch: {
    $route: 'getSong',
  },
};
</script>

<style></style>
