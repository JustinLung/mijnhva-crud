import { getFaq } from "./fetch.js";

async function renderFaqTable() {
  const data = await getFaq();

  for (let i = 0; i < data.length; i++) {
    //   TODO: RENDER DATA FROM API
    console.log(data[i]);
    document.querySelector(".faq-table").insertAdjacentHTML(
      "beforeend",
      `
        <tr>
            <td>${data[i].question_id}</td>
            <td>${data[i].question}</td>
            <td>${data[i].answer}</td>
            <td>${data[i].faq_category_id}</td>
            <td>${data[i].title}</td>
        </tr>`
    );
  }
}

export { renderFaqTable };
