// Variables
const baseUrl = 'https://mijnhva.api.fdnd.nl/v1'
const submitEl = document.getElementById("submitButton")
const query = window.location.search;
const id = new URLSearchParams(query).get('id')
const endpoint = window.location.hash.replace('#', '')
const form = document.querySelector('form')

// Logic
if(!id || !endpoint) window.location = 'index.html'

generateForm(window.location.hash)

submitEl.addEventListener('click', postForm)

// Methods
async function generateForm() {
  const response = await fetch(`${baseUrl}/${endpoint}/${id}`)
  const json = await response.json()
  const inputs = Object.keys(json.data[0]).reverse()
  const values = Object.values(json.data[0]).reverse()
  for (let i = 0; i < inputs.length; i++) {
    form.insertAdjacentHTML('afterbegin', 
    `
    <div>
      <label for="${inputs[i]}">${inputs[i]}</label>
      <input type="text" id="${inputs[i]}" value="${values[i]}"/>
    </div>
    `)
  }
}

async function postForm(e) {
  e.preventDefault()
  const body = getFormValues()
  const options = {
    method: 'PATCH',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  }
  const response = await fetch(`${baseUrl}/${endpoint}`, options)
  console.log(response);
}

function getFormValues() {
  const values = document.querySelectorAll('form > div input')
  const keys = document.querySelectorAll('form > div label')
  let objectArr = []
  for (let i = 0; i < values.length; i++) {
    objectArr.push([keys[i].textContent, values[i].value])
  }
  const body = Object.fromEntries(objectArr)
  return body
}