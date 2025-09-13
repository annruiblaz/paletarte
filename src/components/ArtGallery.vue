<template>
  <div class="art-gallery">
    <div v-if="isLoading" class="loading q-pa-md full-width">
      <q-spinner-ios size="50px" color="primary" class="q-pt-lg" />
      <h5>Cargando obras de arte...</h5>
    </div>

    <div v-else class="masonry">
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
import { onMounted } from 'vue'
import { useArtworkStore } from 'src/stores/artworkStore.js'
import { storeToRefs } from 'pinia'

//se inicializa la store
const artworkStore = useArtworkStore()

//se desestructura la store con storeToRefs para conservar la reactividad
const { artworks, isLoading, error } = storeToRefs(artworkStore)

onMounted(async () => {
  try {
    if (artworks.value.length == 0) {
      artworkStore.fetchArtworks({ query: '*', theme: 'art' })
    }
  } catch (e) {
    console.error('Error al cargar las obras de arte iniciales:', e)
    error.value = e.message
  }
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

  h5 {
    color: #4a4e69;
  }
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
