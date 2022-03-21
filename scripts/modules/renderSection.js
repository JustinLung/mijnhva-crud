import { getSection } from "./fetch.js";

async function renderSectionTable() {
  const data = await getSection();

  for (let i = 0; i < data.length; i++) {
    //   TODO: RENDER DATA FROM API
    console.log(data[i]);
    document.querySelector(".section-table").insertAdjacentHTML(
      "beforeend",
      `
        <tr>
            <td>${data[i].section_id}</td>
            <td>${data[i].title}</td>
            <td>${data[i].body}</td>
            <td>${data[i].page_id}</td>
        </tr>`
    );
  }
}

export { renderSectionTable };
