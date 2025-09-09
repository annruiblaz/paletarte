<template>
  <div
    class="error-page fullscreen text-white text-center q-pa-md flex flex-center"
    :style="{ backgroundImage: `url(${hero})`, opacity: 0.9 }"
  >
    <div>
      <h2 class="text-weight-medium" style="font-size: 18vh">404</h2>

      <h3>No encontramos lo que buscabas, pero seguro que te inspiramos con otra cosa.</h3>

      <q-btn
        class="q-mt-xl"
        size="lg"
        color="secondary"
        unelevated
        to="/"
        label="Volver al inicio"
        no-caps
      />
    </div>
  </div>
</template>

<script setup>
import hero from '../assets/hero1.jpg'
</script>

<style scoped>
.error-page {
  background-size: cover;
  background-position: center;
  min-height: 100vh;

  &::before {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -2;
    background: linear-gradient(0deg, rgba(255, 255, 255, 0.2) -59%, rgba(46, 45, 45, 0.5) 85%);
  }
}
</style>
