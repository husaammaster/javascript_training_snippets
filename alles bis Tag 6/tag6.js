"use strict";

let aufgabe = parseInt(prompt("Welche aufgabe?"));

if (aufgabe && !isNaN(aufgabe)) {
  switch (aufgabe) {
    case 1:
      console.log("Ratespiel beginnt:");
      ratespiel();
      break;
    case 2:
      console.log("Produktnummern aktualisieren");
      fuehrendeNull();
      break;
    case 3:
      console.log("Teilnamen in SessionStorage Cookies:");

      sessionStorage.clear();
      nameZuCookies("Hans Mark Leon Franker");
      nameZuCookies("Hanna Elli Leibtz");
      nameZuCookies("Helmut Olle Peterson");
      nameZuCookies("Anne Marie Keller");

      console.log("sessionStorage:");

      for (let i = 0; i < sessionStorage.length; i++) {
        let keyAtI = sessionStorage.key(i);
        console.log(" - " + sessionStorage.getItem(keyAtI));
      }
      break;
    case 4:
      console.log("Render Cookies speichern und laden:");
      sessionStorage.clear();

      uploadRenderCookies();

      console.log("sessionStorage:");
      for (let i = 0; i < sessionStorage.length; i++) {
        let keyAtI = sessionStorage.key(i);
        console.log(" - " + keyAtI + ": " + sessionStorage.getItem(keyAtI));
      }

      let renderConfigObject = loadRenderCookies();

      console.log(renderConfigObject);

      renderConfigObject["color"] = "red";

      console.log(renderConfigObject);

      break;
    default:
      console.log("Falsche nummer, wähle eine Nummer bis 4");
  }
} else {
  console.log("Eingabe muss eine Zahl sein");
}

function uploadRenderCookies() {
  let renderConfig = {
    bgcolor: "blue",
    font: "Arial",
    color: "white",
    fontSize: "18px",
  };

  let serializedRenderConfig = JSON.stringify(renderConfig);

  sessionStorage.setItem("renderConfig", serializedRenderConfig);
}

function loadRenderCookies() {
  let loadedRenderConfig = sessionStorage.getItem("renderConfig");
  let returnObject = JSON.parse(loadedRenderConfig);
  return returnObject;
}

function nameZuCookies(name) {
  let teilNamen = name.trim().split(" ");
  // console.log(teilNamen);

  let nachName = teilNamen.pop();
  let vorNamen = teilNamen;

  // console.log(vorNamen);
  // console.log(nachName);

  for (let i = 0; i < vorNamen.length; i++) {
    vorNamen[i] = vorNamen[i].charAt(0) + ".";
  }
  // console.log(vorNamen);
  // console.log(nachName);

  let userName = vorNamen.join(" ") + " " + nachName;

  sessionStorage.setItem(nachName, userName);
}

function fuehrendeNull() {
  // Testfälle definieren
  console.log(" -> " + ergaenzeNull(""));
  console.log("123 -> " + ergaenzeNull("123"));
  console.log("7 -> " + ergaenzeNull("7"));
  console.log("07 -> " + ergaenzeNull("07"));
  console.log("007 -> " + ergaenzeNull("007"));
  console.log("2025 -> " + ergaenzeNull("2025"));

  function ergaenzeNull(produktName = "") {
    let ausgabe;
    if (produktName.length == 0) ausgabe = "0";
    else if (produktName[0] != "0") ausgabe = "0" + produktName;
    else ausgabe = produktName; // produktName startet bereits mit 0.

    return ausgabe;
  }
}

function ratespiel() {
  let randZiel = 1 + Math.floor(Math.random() * 10);
  let rateZahl = -1;

  while (rateZahl != randZiel) {
    let origEingabe = prompt("Welche Zahl habe ich geraten (1 bis 10)?");
    let eingabe = parseInt(origEingabe);
    if (!isNaN(eingabe)) {
      rateZahl = eingabe;

      if (eingabe < randZiel) console.log("Das Ziel ist größer als " + eingabe);
      if (eingabe > randZiel)
        console.log("Das Ziel ist kleiner als " + eingabe);
    } else {
      console.log("Eingabe muss eine Zahl sein! Eingabe war " + origEingabe);
    }
  }

  console.log("Super, du hast die Zahl erraten! Es war " + randZiel);
}
