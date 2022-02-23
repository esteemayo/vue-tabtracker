<template>
  <div class="container-fluid mt-5">
    <div class="row">
      <div class="col-md-6" v-if="user">
        <SongsBookmarks />
        <RecentlyViewedSongs />
      </div>
      <div
        :class="{
          'col-md-6': user,
          'col-md-12': !user,
        }"
      >
        <SongSearchPanel />
        <SongsPanel :songs="songs" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

import { getSongs } from '@/services/songService';
import SongsPanel from '@/components/Songs/SongsPanel.vue';
import SongsBookmarks from '@/components/Songs/SongsBookmarks.vue';
import SongSearchPanel from '@/components/Songs/SongSearchPanel.vue';
import RecentlyViewedSongs from '@/components/Songs/RecentlyViewedSongs.vue';

export default {
  name: 'Songs',
  components: {
    SongsPanel,
    SongsBookmarks,
    SongSearchPanel,
    RecentlyViewedSongs,
  },
  data() {
    return {
      songs: [],
    };
  },
  computed: mapGetters(['user']),
  methods: {
    async fetchSongs(search) {
      try {
        const { data } = await getSongs(search);
        this.songs = data.songs;
      } catch (err) {
        console.log(err);
      }
    },
  },
  watch: {
    '$route.query.search': {
      immediate: true,
      async handler(value) {
        const { data } = await getSongs(value);
        this.songs = data.songs;
      },
    },
  },
  mounted() {
    this.fetchSongs();
  },
};
</script>

<style></style>
