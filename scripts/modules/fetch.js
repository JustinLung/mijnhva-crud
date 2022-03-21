const BASE_URL = "https://mijnhva.api.fdnd.nl/v1";

async function getPages() {
  return await fetchApi("/page");
}

async function getFaq() {
  return await fetchApi("/faq");
}

async function getTip() {
  return await fetchApi("/tip");
}

async function getSection() {
  return await fetchApi("/section");
}

async function fetchApi(endpoint) {
  try {
    const response = await fetch(`${BASE_URL}${endpoint}`);
    const json = await response.json();
    return json.data;
  } catch (err) {
    console.log(err);
  }
}

export { getPages, getFaq, getTip, getSection };
