"use strict";

//  Eingaben im input-Feld sollen während der Eingabe (input, change)
//  im Storage gespeichert und im p-tag ausgegeben werden

//  in neuer Sitzung soll Storage ausgelesen werden
//  Wert aus Storage soll in p-tag und im input-Feld integriert werden

//  Referenz auf Elemente im DOM

let input = document.querySelector("#eingabe");
let output = document.querySelector("p");

if (typeof localStorage != "undefined") {
  if (localStorage.getItem("eingabe") != null) {
    output.textContent = input.value = localStorage.getItem("eingabe");
  }
} else {
  alert("Speichern und Laden vom localStorage nicht möglich");
}

input.oninput = function () {
  const textInhalt = this.value;
  output.textContent = textInhalt;
  localStorage.setItem("eingabe", textInhalt);
};
