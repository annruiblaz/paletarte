import {
  defineStore
} from 'pinia'

import {
  searchArtworks
} from 'src/services/europeanaApi.js'

export const useArtworkStore = defineStore('artwork', {
  state: () => ({
    artworks: [],
    isLoading: false,
    error: null
  }),
  getters: {},
  actions: {
    setArtworks(artworks) {
      this.artworks = artworks
    },
    setLoading(isLoading) {
      this.isLoading = isLoading
    },
    setError(error) {
      this.error = error
    },
    async fetchArtworks(queryOptions) {
      this.isLoading = true;
      this.error = null;
      try {
        const data = await searchArtworks(queryOptions);
        this.artworks = data;
      } catch (error) {
        this.error = 'Error al cargar las obras de arte: ' + error.message;
        console.error(this.error);
      } finally {
        this.isLoading = false;
      }
    }
  }
})

/* if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useMyStore, import.meta.hot))
} */
