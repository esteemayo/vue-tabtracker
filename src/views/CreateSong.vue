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
              <span v-if="isLoading">⏳</span>
              <span v-else>Create Song</span>
            </FormButton>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

import FormButton from '@/components/FormButton.vue';
import CustomInput from '@/components/CustomInput.vue';
import CustomTextArea from '@/components/CustomTextArea.vue';

export default {
  name: 'CreateSong',
  components: {
    FormButton,
    CustomInput,
    CustomTextArea,
  },
  data() {
    return {
      song: {
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
  methods: {
    ...mapActions(['addSong']),
    handleSubmit() {
      this.isLoading = true;
      try {
        const {
          title,
          artist,
          genre,
          album,
          albumImageUrl,
          youtubeId,
          lyrics,
          tabs,
        } = this.song;

        const areAllFieldsFilledTn = Object.keys(this.song).every(
          (key) => !!this.song[key]
        );

        if (!areAllFieldsFilledTn) {
          this.error = 'Please fill in all the required fields.';
          return;
        }

        if (
          title &&
          artist &&
          genre &&
          album &&
          albumImageUrl &&
          youtubeId &&
          lyrics &&
          tabs
        ) {
          this.addSong({ ...this.song });

          this.$router.push('/songs');
          this.isLoading = false;
        }
      } catch (err) {
        this.isLoading = false;
        console.log(err);
      }
    },
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
