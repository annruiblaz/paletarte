<template>
  <q-page class="column" bg-light>
    <HeroSection />
    <FiltersGallery />
    <ArtGallery />
  </q-page>
</template>

<script setup>
import HeroSection from 'src/components/HeroSection.vue'
import ArtGallery from 'src/components/ArtGallery.vue'
import FiltersGallery from 'src/components/FiltersGallery.vue'

//
</script>

<style lang="sass" scoped>
.q-page
  background-color: $light
</style>
