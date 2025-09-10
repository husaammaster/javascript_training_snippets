"use strict";

const parag = document.querySelector("p");

// inline style objekt
parag.style.color = "blue";

console.log(parag.style);

parag.style["font-weight"] = "bold";

let buttons = document.querySelector("button");

const FONT_SIZES = {
  biggest: 36,
  big: 24,
  normal: 16,
  small: 11,
};
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    parag.style.fontSize = FONT_SIZES[this.id] + "px";
  });
}
