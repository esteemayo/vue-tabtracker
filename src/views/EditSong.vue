<template>
  <div class="container-fluid mt-5">
    <form class="form" @submit.prevent="handleSubmit">
      <div class="row">
        <div class="col-md-4">
          <Panel title="Song Metadata">
            <template #body>
              <CustomInput
                id="title"
                type="text"
                label="Title"
                placeholder="Title"
                v-model="song.title"
              />

              <CustomInput
                id="artist"
                type="text"
                label="Artist"
                placeholder="Artist"
                v-model="song.artist"
              />

              <CustomInput
                id="genre"
                type="text"
                label="Genre"
                placeholder="Genre"
                v-model="song.genre"
              />

              <CustomInput
                id="album"
                type="text"
                label="Album"
                placeholder="Album"
                v-model="song.album"
              />

              <CustomInput
                id="albumImageUrl"
                type="text"
                label="Album Image Url"
                placeholder="Album Image Url"
                v-model="song.albumImageUrl"
              />

              <CustomInput
                id="youtubeId"
                type="text"
                label="Youtube ID"
                placeholder="Youtube ID"
                v-model="song.youtubeId"
              />
            </template>
          </Panel>
        </div>

        <div class="col-md-8">
          <Panel title="Song Structure">
            <template #body>
              <CustomTextArea
                id="lyrics"
                label="Lyrics"
                placeholder="Lyrics"
                v-model="song.lyrics"
              />

              <CustomTextArea
                id="tabs"
                label="Tabs"
                placeholder="Tabs"
                v-model="song.tabs"
              />
            </template>
          </Panel>
          <br />
          <div class="error text-center" v-if="error">{{ error }}</div>
          <div class="btn-box">
            <FormButton>
              <span v-if="isLoading">Editing...</span>
              <span v-else>Save Song</span>
            </FormButton>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

import FormButton from '@/components/FormButton.vue';
import CustomInput from '@/components/CustomInput.vue';
import CustomTextArea from '@/components/CustomTextArea.vue';

export default {
  name: 'EditSong',
  components: {
    FormButton,
    CustomInput,
    CustomTextArea,
  },
  data() {
    return {
      songs: {
        title: '',
        artist: '',
        genre: '',
        album: '',
        albumImageUrl: '',
        youtubeId: '',
        lyrics: '',
        tabs: '',
      },
      error: null,
      isLoading: false,
    };
  },
  computed: {
    ...mapGetters(['song']),
    songId() {
      return this.$route.params.id;
    },
  },
  methods: {
    ...mapActions(['getSong', 'editSong']),
    handleSubmit() {
      this.isLoading = true;
      try {
        const updSong = {
          id: this.songId,
          title: this.song.title,
          artist: this.song.artist,
          genre: this.song.genre,
          album: this.song.album,
          albumImageUrl: this.song.albumImageUrl,
          youtubeId: this.song.youtubeId,
          lyrics: this.song.lyrics,
          tabs: this.song.tabs,
        };

        this.editSong(updSong);
        this.$router.replace(`/songs/${this.songId}`);
        this.isLoading = false;
      } catch (err) {
        this.isLoading = false;
        console.log(err);
      }
    },
  },
  mounted() {
    this.getSong(this.songId);
  },
};
</script>

<style scoped>
.error {
  color: #ff0000;
  padding: 20px;
}

.btn-box {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
