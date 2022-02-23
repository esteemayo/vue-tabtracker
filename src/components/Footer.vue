<template>
  <footer class="footer mt-auto py-3 bg-light">
    <div class="container">
      <p class="footer__copyright">
        &copy; Copyright <span>{{ copyRightYear }}</span> by Emmanuel Adebayo.
        All rights reserved. We are a young company always looking for new and
        creative ideas to help you with our products in your everyday work.
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  computed: {
    copyRightYear() {
      const date = new Date();
      return date.getFullYear();
    },
  },
};
</script>

<style scoped>
.footer {
  bottom: 0;
  width: 100%;
  margin-top: 55vh !important;
  background-image: linear-gradient(
    to right bottom,
    #0c9494,
    #1f9187,
    #15847b,
    #087777,
    #025858
  );
}

.footer__copyright {
  width: 70%;
  font-size: 15px;
  text-align: center;
  margin-top: 60px;
  margin-left: auto;
  margin-right: auto;
  color: var(--color-white);
}

@media only screen and (max-width: 47.94em) {
  .footer__copyright {
    width: 100%;
    font-size: 13px;
    margin-top: 45px;
  }
}
</style>
