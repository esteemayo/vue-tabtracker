<template>
  <div>
    <Panel title="Songs">
      <template #action>
        <div class="text-center button-container">
          <router-link v-if="user" to="/songs/create">
            <button class="btn-rounded">
              <i class="fas fa-plus"></i>
            </button>
          </router-link>
        </div>
      </template>
      <template #body></template>
    </Panel>

    <div v-for="song in songs" :key="song._id">
      <div class="row song">
        <div class="col-md-6 song-details">
          <div class="song-title">{{ song.title }}</div>
          <div class="song-artist">{{ song.artist }}</div>
          <div class="song-genre">{{ song.genre }}</div>

          <router-link :to="`/songs/${song._id}`">
            <button class="btn">View</button>
          </router-link>
        </div>
        <div class="col-md-6 img-container">
          <img
            :src="song.albumImageUrl"
            :alt="song.title"
            class="album-image"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'SongsPanel',
  props: {
    songs: {
      type: Array,
      required: true,
    },
  },
  computed: mapGetters(['user']),
};
</script>

<style scoped>
.song {
  padding: 20px;
  height: 330px;
  overflow: hidden;
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

.album-image {
  width: 70%;
  margin: 0 auto;
  display: block;
  object-fit: cover;
  border-radius: 5px;
  transition: all 0.2s ease;
}

.album-image:hover {
  transform: scale(1.05);
}

.button-container {
  position: relative;
}

.btn-rounded {
  position: absolute;
  right: 0;
  top: -15px;
  width: 50px;
  height: 50px;
  display: block;
  background-color: #025858;
  color: var(--color-white);
  border: none;
  border-radius: 100%;
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn-rounded:focus {
  outline: none;
}

.btn-rounded:hover {
  background-image: radial-gradient(
    #029c9c,
    #1a998e,
    #008b8b,
    #15847b,
    #025858
  );
}

.btn {
  display: block;
  margin-top: 10px;
  background-image: linear-gradient(to right bottom, #008b8b, #15847b, #025858);
  color: var(--color-white);
  transition: all 0.2s ease-out;
}

.btn:hover {
  background-image: linear-gradient(to left top, #008b8b, #15847b, #025858);
  box-shadow: 5px 10px 20px rgba(00, 00, 00, 0.2);
}

@media only screen and (max-width: 47.94em) {
  .song-details {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-bottom: 20px;
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

  .btn {
    font-size: 12px;
  }

  .btn-rounded {
    width: 40px;
    height: 40px;
    top: -10px;
  }
}
</style>
