<template>
  <q-parallax class="hero-background" :height="800" :speed="1" :src="heroImage">
    <div class="hero-section column q-ma-md">
      <h2 class="text-weight-medium" color="primary">Explora el arte a través del color</h2>
      <h3 color="primary">Hero subtitulo</h3>
      <h5></h5>

      <div class="hero-buttons row q-gutter-md">
        <q-btn
          no-caps
          outline
          label="Ver galería"
          size="lg"
          icon-right="arrow_right"
          color="primary"
        />
        <q-btn no-caps label="Generar paleta" size="lg" icon-right="shuffle" color="accent" />
      </div>
    </div>
  </q-parallax>
</template>

<script setup>
import heroImage from 'src/assets/hero1.jpg'
</script>

<style lang="sass" scoped>
h2,
h3
  color: $light;
</style>
