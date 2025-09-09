const API_URL = 'https://api.europeana.eu/record/v2/search.json'
const API_KEY = process.env.VUE_APP_EUROPEANA_API_KEY


export const searchArtworks = async (query = 'painting', start = 1, rows = 50) => {


  if (!API_KEY) {
    console.error('La API key no está definida.')
    throw new Error('API key is not defined')
  }

  const url = new URL(API_URL)
  url.searchParams.append('wskey', API_KEY)
  url.searchParams.append('query', query)
  url.searchParams.append('start', start)
  url.searchParams.append('rows', rows)
  url.searchParams.append('media', 'true')
  url.searchParams.append('qf', 'TYPE:IMAGE')
  url.searchParams.append('reusability', 'open')

  try {
    const response = await fetch(url)

    if (!response.ok) {
      throw new Error(`Error HTTP! status: ${response.status}`)
    }

    const data = await response.json()
    return data.items

  } catch (error) {
    console.error('Error al obtener las obras de Europeana:', error)
    throw error
  }
}
