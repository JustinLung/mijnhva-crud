import { renderPageTable } from "./modules/renderPage.js";
import { renderFaqTable } from "./modules/renderFaq.js";
import { renderTipTable } from "./modules/renderTip.js";
import { renderSectionTable } from "./modules/renderSection.js";

const navItems = document.querySelectorAll('nav a')

navItems.forEach(item=>{
  item.addEventListener('click', (e)=>{
    e.preventDefault()
    window.location = e.target.href
    setTimeout(()=>{
      window.scrollTo(0, 0)
    },1)
  })
})

window.location.hash = window.location.hash === '' ? '#page' : window.location.hash

renderPageTable();
renderFaqTable();
renderTipTable();
renderSectionTable();