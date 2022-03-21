import { getFaq } from "./fetch.js";

async function renderFaqTable() {
  const data = await getFaq();

  for (let i = 0; i < data.length; i++) {
    //   TODO: RENDER DATA FROM API
    document.querySelector(".faq-table").insertAdjacentHTML(
      "beforeend",
      `
        <tr>
            <td>${data[i].question_id}</td>
            <td>${data[i].question.length >= 70 ? `${data[i].question.substring(0, 70)}...` : data[i].question }</td>
            <td>${data[i].answer.length >= 100 ? `${data[i].answer.substring(0, 100)}...` : data[i].answer }</td>
            <td>${data[i].faq_category_id}</td>
            <td>${data[i].title}</td>
        </tr>`
    );
  }
}

export { renderFaqTable };
