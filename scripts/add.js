// Variables
const baseUrl = "https://mijnhva.api.fdnd.nl/v1";
const submitEl = document.getElementById("submitButton");
const form = document.querySelector("form");

submitEl.addEventListener("click", getFormValues);

async function addDataForm(e) {
  e.preventDefault();
  const body = getFormValues();
  const options = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  };
  const response = await fetch(`${baseUrl}/${endpoint}`, options);
  console.log(response);
}

function getFormValues() {
  const pageTitle = document.getElementById("pageTitle").value;
  const pageSlug = document.getElementById("slug").value;
  const sectionTitle = document.getElementById("sectionTitle").value;
  const sectionBody = document.getElementById("sectionBody").value;
  const question = document.getElementById("question").value;
  const answer = document.getElementById("answer").value;
  const category = document.getElementById("category").value;
  const tipTitle = document.getElementById("tipTitle").value;
  const tipBody = document.getElementById("tipBody").value;
  const inputValues = {
    pageTitle,
    pageSlug,
    question,
    sectionTitle,
    sectionBody,
    answer,
    category,
    tipTitle,
    tipBody,
  };
  addDataForm(inputValues);
}
