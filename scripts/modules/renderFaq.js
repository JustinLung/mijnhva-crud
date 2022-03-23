import { getFaq } from "./fetch.js";

// const id = new URLSearchParams(window.location.search).get("id");

// if(!id) window.location.href= "index.html"

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
            <td><a href="edit.html?question_id=${data[i].question_id}">Edit</a></td>
        </tr>
      </a>
      `
    );
  }
}

export { renderFaqTable };
