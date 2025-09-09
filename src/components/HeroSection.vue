<template>
  <q-parallax class="hero-background window-height" :speed="0.5" :src="heroImage">
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
          style="color: #f2e9e4"
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

.hero-background::before
    content: ''
    width: 100%
    height: 100%
    position: absolute
    top: 0
    left: 0
    z-index: 1
    background: linear-gradient(0deg, rgba(255, 255, 255, 0.2) -59%, rgba(46, 45, 45, 0.5) 85%)

.hero-section
  z-index: 1
</style>
