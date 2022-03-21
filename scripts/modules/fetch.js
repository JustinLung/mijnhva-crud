const BASE_URL = 'https://mijnhva.api.fdnd.nl/v1'

async function getPages() {
  return await fetchApi('/page')
}

async function fetchApi(endpoint) {
  const response = await fetch(`${BASE_URL}${endpoint}`)
  const json = await response.json()
  return json
}

export {
  getPages
}