import { getPages } from "./modules/fetch.js";

async function fillTable() {
  const data = await getPages()
  console.log(data);
}

fillTable()