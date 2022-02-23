<template>
  <Panel title="Song Metadata">
    <template #body>
      <div class="row song">
        <div class="col-md-6 song-details">
          <div class="song-title">{{ song.title }}</div>
          <div class="song-artist">{{ song.artist }}</div>
          <div class="song-genre">{{ song.genre }}</div>

          <div class="button-group">
            <router-link
              v-if="user && user.id === song.user"
              :to="`/songs/${song._id}/edit`"
            >
              <button class="btn">Edit</button>
            </router-link>

            <button class="btn" v-if="user && !bookmark" @click="setAsBookmark">
              Set As Bookmark
            </button>
            <button
              class="btn"
              v-if="user && bookmark"
              @click="UnsetAsbookmark"
            >
              Unset As Bookmark
            </button>
          </div>
        </div>
        <div class="col-md-6">
          <img
            :src="song.albumImageUrl"
            :alt="song.title"
            class="album-image"
          />
          <div class="text-center">{{ song.album }}</div>
        </div>
      </div>
    </template>
  </Panel>
</template>

<script>
import { mapGetters } from 'vuex';
import * as bookmarkService from '@/services/bookmarkService';

export default {
  name: 'SongMetadata',
  props: {
    song: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      bookmark: null,
    };
  },
  computed: {
    ...mapGetters(['user']),
    songId() {
      return this.$route.params.id;
    },
    bookmarkId() {
      return this.bookmark?._id;
    },
  },
  methods: {
    async setAsBookmark() {
      try {
        const newBookmark = {
          song: this.songId,
        };

        const { data } = await bookmarkService.createBookmark({
          ...newBookmark,
        });
        this.bookmark = data.bookmark;
      } catch (err) {
        console.log(err);
      }
    },
    async UnsetAsbookmark() {
      try {
        await bookmarkService.deleteBookmark(this.bookmarkId);
        this.bookmark = null;
      } catch (err) {
        console.log(err);
      }
    },
  },
  watch: {
    async song() {
      if (!this.user) {
        return;
      }

      try {
        const { data } = await bookmarkService.getOneBookmark(this.songId);
        this.bookmark = data.bookmark;
        // this.bookmark = !!data.bookmark;
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style scoped>
.song {
  padding: 20px;
  height: 330px;
  overflow: hidden;
}

.album-image {
  width: 70%;
  margin: 0 auto;
  display: block;
  object-fit: cover;
  border-radius: 5px;
  transition: all 0.2s ease;
}

.album-image:hover {
  transform: scale(1.03);
}

.song-title {
  font-size: 30px;
}

.song-artist {
  font-size: 24px;
}

.song-genre {
  font-size: 18px;
}

.button-group {
  display: flex;
  flex-wrap: wrap;
}

.btn {
  display: block;
  margin: 5px 5px 0 0;
  background-image: linear-gradient(to right bottom, #008b8b, #15847b, #025858);
  color: var(--color-white);
  transition: all 0.2s ease-out;
}

.btn:hover {
  background-image: linear-gradient(to left top, #008b8b, #15847b, #025858);
  box-shadow: 5px 10px 20px rgba(00, 00, 00, 0.2);
}

a:hover {
  text-decoration: none;
}

@media only screen and (max-width: 47.94em) {
  .song {
    margin: 0 auto;
  }

  .song-details {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .album-image {
    width: 100%;
  }

  .song-title {
    font-size: 25px;
  }

  .song-artist {
    font-size: 20px;
  }

  .song-genre {
    font-size: 14px;
  }

  .button-group {
    margin-bottom: 10px;
  }

  .btn {
    font-size: 12px;
  }
}
</style>
