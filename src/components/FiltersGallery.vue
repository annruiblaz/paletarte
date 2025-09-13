<template>
  <div class="filters-gallery row q-gutter-md q-pa-md flex-center">
    <q-input
      v-model="query"
      type="search"
      label="Busca un estilo, artista o época"
      debounce="800"
      maxlength="40"
      color="secondary"
      label-color="secondary"
      @update:model-value="fetchFilterData"
    >
      <template v-slot:prepend>
        <q-icon name="search" color="secondary" />
      </template>
      <template v-if="selectedTheme !== ''" v-slot:append>
        <q-icon name="close" @click="query = ''" class="cursor-pointer" />
      </template>
    </q-input>
    <q-select
      v-model="selectedTheme"
      :options="themes"
      label="Explorar por temática"
      color="secondary"
      label-color="secondary"
      @update:model-value="fetchFilterData"
    />
    <q-btn
      outline
      no-caps
      label="Obras al azar"
      size="lg"
      color="secondary"
      @click="randomArtworks"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useArtworkStore } from 'src/stores/artworkStore.js'
import { storeToRefs } from 'pinia'

const artworkStore = useArtworkStore()
const { error } = storeToRefs(artworkStore)

const selectedTheme = ref(null)
const query = ref('')

const themes = [
  { label: 'Arte', value: 'art' },
  { label: 'Moda', value: 'fashion' },
  { label: 'Fotografía', value: 'photography' },
  { label: 'Mapas', value: 'map' },
  { label: 'Manuscritos', value: 'manuscript' },
  { label: 'Música', value: 'music' },
  { label: 'Arqueologia', value: 'archaeology' },
  { label: 'Naturaleza', value: 'nature' },
]

async function fetchFilterData() {
  try {
    artworkStore.fetchArtworks({
      query: query.value ? query.value : '*',
      theme: selectedTheme.value.value ? selectedTheme.value.value : 'art',
    })
  } catch (e) {
    console.error(`Error al cargar las obras de ${selectedTheme.value.value}: ${e}`)
    error.value = e.message
  }
}

async function randomArtworks() {
  query.value = '*'
  const randomTheme = themes[Math.floor(Math.random() * themes.length)].value

  try {
    artworkStore.fetchArtworks({ query: '*', theme: randomTheme })
    selectedTheme.value = randomTheme
  } catch (error) {
    console.error(`Error al cargar las obras aleatorias: ${error}`)
  }
}
</script>

<style>
.filters-gallery {
  margin: 0 auto;
  width: 100%;
  min-height: 300px;
  max-width: 1200px;
  gap: 16px;
  align-items: end;

  .q-input,
  .q-select,
  .q-btn {
    width: 100%;
    margin: 0;
  }

  .q-select {
    min-width: 250px;
  }

  @media (min-width: 480px) {
    min-height: 110px;

    .q-select,
    .q-btn {
      width: fit-content;
    }

    .q-input {
      max-width: 400px;
    }
  }
}
</style>
