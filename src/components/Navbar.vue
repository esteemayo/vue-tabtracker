<template>
  <nav class="navbar navbar-expand-lg fixed-top navbar-light bg-light">
    <div class="container-fluid">
      <router-link to="/" class="navbar-brand">TabTracker</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link
              to="/songs"
              class="nav-link active"
              aria-current="page"
            >
              Browse
            </router-link>
          </li>
        </ul>
        <ul class="navbar-nav ml-auto mb-2 mb-lg-0">
          <li v-if="!user" class="nav-item">
            <router-link
              to="/register"
              class="nav-link active"
              aria-current="page"
            >
              Sign up
            </router-link>
          </li>
          <li v-if="!user" class="nav-item">
            <router-link
              to="/login"
              class="nav-link active"
              aria-current="page"
            >
              Login
            </router-link>
          </li>
          <li v-if="user" class="nav-item">
            <router-link to="#" class="nav-link">
              Welcome, {{ user.firstName }}
            </router-link>
          </li>
          <li v-if="user" class="nav-item">
            <router-link to="#" class="nav-link" @click="logoutButton">
              Logout
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
  name: 'Navbar',
  computed: mapGetters(['user']),
  methods: {
    ...mapMutations(['logout']),
    logoutButton() {
      this.logout();
      this.$router.push('/');
    },
  },
};
</script>

<style scoped>
.bg-light {
  background-image: linear-gradient(
    to right bottom,
    #0c9494,
    #1f9187,
    #15847b,
    #087777,
    #025858
  );
}

.navbar-brand,
.nav-link {
  color: var(--color-white) !important;
}

.navbar-toggler {
  border: none;
  outline: none;
}
</style>
