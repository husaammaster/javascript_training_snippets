"use strict";

const para = document.querySelector("p");
const bigBtn = document.querySelector("#big");
const smallBtn = document.querySelector("#small");

const STEP = 5;
const UNIT = "px";

/* 
window.getComputedStyle(elem)
-> {
...
}
beinhaltet broiwser styles, css und inline styles. Wie der inspektor
Prioritäten in aufsteigender Reihenfolge (wie im HTML vs CSS):
- browser-styles
- css stlyes
- inline stlyes
*/

let storedSize = localStorage.getItem("fontSize");

if (!storedSize || storedSize == "NaNpx") {
  console.log("no fontSize in localStorage");
  storedSize = getComputedStyle(para).fontSize;
}
setFontSize(parseInt(storedSize));

function setFontSize(newSize) {
  bigBtn.disabled = newSize > 50;
  smallBtn.disabled = newSize < 20;
  para.style.fontSize = newSize + UNIT;
  if (window.localStorage) localStorage.setItem("fontSize", newSize);
}

function getFontSize() {
  return parseInt(para.style.fontSize);
}

bigBtn.addEventListener("click", function () {
  let fontSize = getFontSize();
  console.log(fontSize);
  setFontSize(fontSize + STEP);
});

smallBtn.addEventListener("click", function () {
  let fontSize = getFontSize();
  console.log(fontSize);
  setFontSize(fontSize - STEP);
});
