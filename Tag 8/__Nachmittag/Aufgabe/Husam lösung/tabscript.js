"use strict";

const tabSlider = document.querySelector(".tabs");
const liNodeList = tabSlider.querySelectorAll("nav ul li");
const articleNodeList = tabSlider.querySelectorAll("article");

console.log(liNodeList);

const homeTab = liNodeList[0];
const leistungenTab = liNodeList[1];
const ueberUnsTab = liNodeList[2];
const kontaktTab = liNodeList[3];

function tabHighlightFunction() {
  const tabText = this.innerText;
  console.log(tabText + " wurde gedrückt.");

  for (let i = 0; i < liNodeList.length; i++) {
    liNodeList[i].classList.remove("active");
  }
  this.classList.add("active");
}

homeTab.addEventListener("click", tabHighlightFunction);
leistungenTab.addEventListener("click", tabHighlightFunction);
ueberUnsTab.addEventListener("click", tabHighlightFunction);
kontaktTab.addEventListener("click", tabHighlightFunction);

function tabShowArticleFunction() {
  const pressedTabText = this.innerText;
  console.log("Wechsel zur Artikelseite von " + pressedTabText);

  for (let i = 0; i < articleNodeList.length; i++) {
    const article = articleNodeList[i];
    const h2_Element = article.querySelector("h2");
    const articleTitle = h2_Element.innerText;

    if (pressedTabText == articleTitle) {
      article.classList.remove("hiddenclass");
    } else {
      article.classList.add("hiddenclass");
    }
  }
}

for (let i = 0; i < liNodeList.length; i++) {
  liNodeList[i].addEventListener("click", tabShowArticleFunction);
}

// kontaktTab.click();
