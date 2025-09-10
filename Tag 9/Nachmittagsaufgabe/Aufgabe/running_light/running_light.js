"use strict";

let aufgabe = parseInt(
  Number(prompt("Lauflicht per Klick (1) oder Katz und Maus (2)?"))
);

if (aufgabe == 1) lauflicht();
else if (aufgabe == 2) katzUndMaus();
else alert("Bitte eine 1 oder 2 eingeben.");

function lauflicht() {
  const bulbNodeList = document.querySelectorAll("img");
  let activeBulb = 0;
  const numBulbs = bulbNodeList.length;

  function resetAllBulbs() {
    for (let i = 0; i < numBulbs; i++) {
      bulbNodeList[i].src = "light_off.png";
    }
  }

  function nextBulb() {
    activeBulb = (activeBulb + 1) % numBulbs;
    resetAllBulbs();
    bulbNodeList[activeBulb].src = "light_on.png";
    console.log("Bulb " + activeBulb + " is now active");
  }

  nextBulb();
  nextBulb();
  nextBulb();

  document.addEventListener("click", nextBulb);
}

function katzUndMaus() {
  const bulbNodeList = document.querySelectorAll("img");
  let activeBulb = 0;
  const numBulbs = bulbNodeList.length;

  function resetAllBulbs() {
    for (let i = 0; i < numBulbs; i++) {
      bulbNodeList[i].src = "light_off.png";
      bulbNodeList[i].classList.remove("active");
    }
  }

  function nextBulb() {
    activeBulb = (activeBulb + 1) % numBulbs;
    resetAllBulbs();
    bulbNodeList[activeBulb].src = "light_on.png";
    bulbNodeList[activeBulb].classList.add("active");
    console.log("Bulb " + activeBulb + " is now active");
  }

  nextBulb();
  nextBulb();
  nextBulb();

  for (let i = 0; i < numBulbs; i++) {
    const bulb = bulbNodeList[i];
    bulb.addEventListener("mouseenter", function () {
      if (this.classList.contains("active")) nextBulb();
    });
  }
}
