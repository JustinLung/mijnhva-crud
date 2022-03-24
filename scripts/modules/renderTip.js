import { getTip } from "./fetch.js";

async function renderTipTable() {
  const data = await getTip();

  for (let i = 0; i < data.length; i++) {
    //   TODO: RENDER DATA FROM API
    document.querySelector(".tip-table").insertAdjacentHTML(
      "beforeend",
      `
        <tr>
            <td>${data[i].tip_id}</td>
            <td>${data[i].title}</td>
            <td>${data[i].body.length >= 100 ? `${data[i].body.substring(0, 100)}...` : data[i].body }</td>
             <td><a href="edit.html?id=${data[i].tip_id}#tip">Edit</a></td>
        </tr>`
    );
  }
}

export { renderTipTable };
