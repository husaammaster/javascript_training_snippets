"use strict";

const NAV_TABS = document.querySelectorAll("nav li");
const ARTICLE = document.querySelectorAll("article");

console.log(NAV_TABS);
console.log(ARTICLE);

let hideAllArticle = function() {
    for(let i = 0; i < ARTICLE.length; i++) {
        // neue Klasse zuordnen 
        ARTICLE[i].classList.add("hiddenclass");
        // alternativ:  ARTICLE[i].hidden = true;
        
        NAV_TABS[i].classList.remove("active");
    }
};

let showArticle = function(index) {
    // neue Klasse entfernen 
    ARTICLE[index].classList.remove("hiddenclass");
    // alternativ:  ARTICLE[index].hidden = false;
    NAV_TABS[index].classList.add("active");
};

for(let i = 0; i < NAV_TABS.length; i++) {
    NAV_TABS[i].addEventListener("click",function() {
        hideAllArticle();
        showArticle(i);
    });
}

hideAllArticle();
showArticle(0);