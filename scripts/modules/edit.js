const submit = document.getElementById("submitButton");

submit();

function submit(e) {
  e.preventDefault();
  console.log("submit");
}
