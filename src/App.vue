<template>
  <div>
    <Navbar />
    <div class="space"></div>
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'App',
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style scoped>
.space {
  display: block;
  margin-bottom: 120px;
}
</style>
