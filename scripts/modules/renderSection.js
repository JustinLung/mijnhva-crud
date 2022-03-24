import { getSection } from "./fetch.js";

async function renderSectionTable() {
  const data = await getSection();

  for (let i = 0; i < data.length; i++) {
    //   TODO: RENDER DATA FROM API
    document.querySelector(".section-table").insertAdjacentHTML(
      "beforeend",
      `
        <tr>
            <td>${data[i].section_id}</td>
            <td>${data[i].title}</td>
            <td>${data[i].body.length >= 100 ? `${data[i].body.substring(0, 100)}...` : data[i].body }</td>
            <td>${data[i].page_id}</td>
            <td><a href="edit.html?id=${data[i].section_id}#section">Edit</a></td>
        </tr>`
    );
  }
}

export { renderSectionTable };
