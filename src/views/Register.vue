<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-6 offset-md-3">
        <Panel title="Register">
          <template #body>
            <form class="form" @submit.prevent="handleSubmit">
              <CustomInput
                id="name"
                type="text"
                label="Name"
                placeholder="Name"
                v-model.trim="values.name"
              />

              <CustomInput
                id="email"
                type="email"
                placeholder="Email"
                label="Email Address"
                v-model.trim="values.email"
              />

              <CustomInput
                id="password"
                type="password"
                label="Password"
                placeholder="********"
                v-model="values.password"
              />

              <CustomInput
                id="confirmPassword"
                type="password"
                placeholder="********"
                label="Confirm Password"
                v-model="values.confirmPassword"
              />

              <div class="error" v-html="error"></div>

              <FormButton>
                <span v-if="isLoading">⏳</span>
                <span v-else>Register</span>
              </FormButton>
            </form>
          </template>
        </Panel>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

import { register } from '@/services/userService';
import FormButton from '@/components/FormButton.vue';
import CustomInput from '@/components/CustomInput.vue';

export default {
  name: 'Register',
  components: {
    FormButton,
    CustomInput,
  },
  data() {
    return {
      values: {
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
      },
      error: null,
      isLoading: false,
    };
  },
  methods: {
    ...mapActions(['setUser']),
    async handleSubmit() {
      this.isLoading = true;
      try {
        const { data } = await register({ ...this.values });
        this.setUser(data.accessToken);
        this.isLoading = false;

        window.location.replace('/songs');
      } catch (err) {
        this.error = err.response.data.message;
        this.isLoading = false;
      }
    },
  },
};
</script>

<style scoped>
.error {
  color: #ff0000;
}
</style>
