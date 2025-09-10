"use strict";

let gefahreneKM = prompt("Wie viele Kilometer bist du gefahren?", "0");
let benzinMenge = prompt("Wie viel Gas hast du verbraucht?", "0");
let tankGroesse = prompt("Was ist deine Tankgröße?", 0);

if (gefahreneKM <= 0 && benzinMenge <= 0) {
  alert("Falsche eingabe.");
  console.error("Falsche eingabe.");
}
if (tankGroesse <= 0) {
  alert("Falsche eingabe.");
  console.error("Falsche eingabe.");
}

function verbrauchAnzeigen(benzinMenge, gefahreneKM) {
  let verbrauchPro100 = (benzinMenge / gefahreneKM) * 100;
  verbrauchPro100 = verbrauchPro100.toFixed(2);

  console.log(
    "Du hast",
    benzinMenge,
    "Liter auf",
    gefahreneKM,
    "km verbraucht"
  );
  console.log(
    "Das entsprichteinem Verbrauch von",
    verbrauchPro100,
    "l pro 100 km"
  );

  let reichweite = verbrauchPro100 * tankGroesse;

  console.log(
    "Bei vollem Tank hast du eine Reichweite von",
    reichweite,
    "Kilometern."
  );
}

verbrauchAnzeigen(benzinMenge, gefahreneKM);
