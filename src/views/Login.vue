<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-6 offset-md-3">
        <Panel title="Login">
          <template #body>
            <form class="form" @submit.prevent="handleSubmit">
              <CustomInput
                id="email"
                type="email"
                placeholder="Email"
                label="Email Address"
                v-model.trim="email"
              />

              <CustomInput
                id="password"
                type="password"
                label="Password"
                placeholder="********"
                v-model="password"
              />

              <div class="error text-center" v-html="error"></div>

              <FormButton>
                <span v-if="isLoading">⏳</span>
                <span v-else>Login</span>
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

import { login } from '@/services/authService';
import FormButton from '@/components/FormButton.vue';
import CustomInput from '@/components/CustomInput.vue';

export default {
  name: 'Login',
  components: {
    FormButton,
    CustomInput,
  },
  data() {
    return {
      email: '',
      password: '',
      error: null,
      isLoading: false,
    };
  },
  methods: {
    ...mapActions(['setToken', 'setUser']),
    async handleSubmit() {
      this.isLoading = true;
      try {
        const userData = {
          email: this.email,
          password: this.password,
        };

        const { data } = await login({ ...userData });
        this.setUser(data.accessToken);
        this.isLoading = false;

        // this.$router.replace('/songs');
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
