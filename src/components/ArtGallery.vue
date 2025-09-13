<template>
  <div class="art-gallery">
    <div v-if="loading" class="loading q-pa-md full-width">
      <q-spinner-ios size="50px" color="primary" class="q-pt-lg" />
      <h5 color="primary">Cargando obras de arte...</h5>
    </div>

    <div class="masonry">
      <q-card v-for="art in artworks" :key="art.id" class="q-mb-lg">
        <img :src="art.edmPreview[0]" :alt="art.title[0]" />
        <q-card-section>
          <div class="text-h6">{{ art.title[0] }}</div>
          <div class="text-subtitle2">{{ art.dcCreator ? art.dcCreator[0] : 'Desconocido' }}</div>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { searchArtworks } from '../services/europeanaApi.js'

const artworks = ref([])
const loading = ref(true)

onMounted(async () => {
  loading.value = true

  if (!localStorage.getItem('artworks')) {
    artworks.value = await searchArtworks({}).then(() => {
      console.log('Artgallery data fetch', artworks.value)
    })
  } else {
    artworks.value = JSON.parse(localStorage.getItem('artworks') || '[]')
    console.log('Artgallery data LocalStorage', artworks.value)
  }

  loading.value = false
})
</script>

<style scoped>
.art-gallery {
  max-width: 1200px;
  margin: 0 auto;
  padding: 16px;
  justify-content: center;
}

.loading {
  width: 100%;
  min-height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.masonry {
  columns: auto;
  gap: 16px;

  @media (min-width: 600px) {
    columns: 2;
  }

  @media (min-width: 1200px) {
    columns: 3;
  }
}

.masonry > .q-card {
  break-inside: avoid;
}

.q-card > img {
  width: 100%;
}
</style>
