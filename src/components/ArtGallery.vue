<template>
  <div class="art-gallery row q-col-gutter-md">
    <div v-if="loading" class="loading q-pa-md full-width">
      <q-spinner-ios size="50px" color="primary" class="q-pt-lg" />
      <h5 color="primary">Cargando obras de arte...</h5>
    </div>

    <div class="masonry">
      <q-card v-for="art in artworks" :key="art.id" class="q-my-lg">
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

const fetchArtworks = async () => {
  try {
    const data = await searchArtworks()
    console.log('Data:', data)
    artworks.value = data
  } catch (error) {
    console.error('Error fetching artworks:', error)
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  fetchArtworks()
  return artworks
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
  columns: 3;
  gap: 16px;
}

.masonry > .q-card {
  break-inside: avoid;
}
</style>
