import { getTip } from "./fetch.js";

async function renderTipTable() {
  const data = await getTip();

  for (let i = 0; i < data.length; i++) {
    //   TODO: RENDER DATA FROM API
    console.log(data[i]);
    document.querySelector(".tip-table").insertAdjacentHTML(
      "beforeend",
      `
        <tr>
            <td>${data[i].tip_id}</td>
            <td>${data[i].title}</td>
            <td>${data[i].body}</td>
        </tr>`
    );
  }
}

export { renderTipTable };
