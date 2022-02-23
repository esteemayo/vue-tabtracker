<template>
  <div class="container mt-5">
    <h1 class="heading-primary">Promote your song with tabtracker</h1>
    <p class="text">Get more users to promote your song with this website</p>

    <div class="btn__container">
      <router-link to="/songs">
        <button class="btn btn--1">Get started</button>
      </router-link>
      <router-link v-if="!user" to="/register">
        <button class="btn btn--2">Sign up for free</button>
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Home',
  computed: mapGetters(['user']),
};
</script>

<style scoped>
.heading-primary {
  font-size: 45px;
  font-weight: 700;
  text-transform: capitalize;
  display: inline-block;
  background-image: linear-gradient(to right, #17c0c0, #025858);
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  transition: all 0.2s ease-out;
}

.heading-primary:hover {
  transform: skewY(2deg) skewX(15deg) scale(1.1);
  text-shadow: 8px 16px 32px rgba(00, 00, 00, 0.2);
}

.text {
  font-size: 18px;
  letter-spacing: 1px;
}

.btn__container {
  margin-top: 20px;
}

.btn {
  text-transform: capitalize;
}

.btn--1 {
  background-color: #025858;
  color: var(--color-white);
  margin-right: 20px;
  transition: all 0.2s ease-out;
}

.btn--1:hover {
  background-color: transparent;
  color: #025858;
  border: 1px solid #025858;
  box-shadow: 5px 10px 20px rgba(00, 00, 00, 0.2);
}

.btn--2 {
  background-color: transparent;
  color: #025858;
  border: 1px solid #025858;
  transition: all 0.2s ease-out;
}

.btn--2:hover {
  color: var(--color-white);
  background-color: #008b8b;
  border: 1px solid #008b8b;
  box-shadow: 5px 10px 20px rgba(00, 00, 00, 0.2);
}

@media only screen and (max-width: 47.94em) {
  .heading-primary {
    font-size: 35px;
    font-weight: 300;
  }

  .text {
    font-size: 16px;
  }

  .btn {
    font-size: 14px;
  }
}
</style>
