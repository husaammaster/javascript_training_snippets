"use strict";

// elements
const button = document.querySelector("button");
const resultField = document.querySelector("#result");

// messaegs
const msgKeinStorage = "Error: Storage ist nicht verfügbar";

// Schließe die Browser-Registerkarte (oder Browser-Fenster)
// und versuche es erneut. Der Zähler wird zurückgesetzt.
if (!sessionStorage) {
  alert(msgKeinStorage);
}
let count = sessionStorage.getItem("coutner");
if (!count) {
  console.log(count);
  console.log(typeof count);

  alert("Counter noch nicht zugewiesen");

  count = 0;
}
resultField.textContent = "Der Zähler ist bei " + count;

// Klicke auf diese Schaltfläche, um den Zählerstand zu erhöhen
// und im div-tag auszugeben. Ein Reload soll nicht zum reset führen.
button.onclick = function () {
  count += 1;
  resultField.textContent = "Der Zähler ist bei " + count;
  sessionStorage.setItem("counter", count);
};
