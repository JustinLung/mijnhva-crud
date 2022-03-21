import { getPages } from "./fetch.js";

async function renderPageTable() {
  const data = await getPages();

  for (let i = 0; i < data.length; i++) {
    //   TODO: RENDER DATA FROM API
    console.log(data[i]);
    document.querySelector(".page-table").insertAdjacentHTML(
      "beforeend",
      `
        <tr>
            <td>${data[i].page_id}</td>
            <td>${data[i].title}</td>
            <td>${data[i].slug}</td>
        </tr>`
    );
  }
}

export { renderPageTable };
