"use strict";

let aufgabe = prompt("Welche Aufgabe soll laufen?", 1);

switch (parseInt(aufgabe)) {
  case 1:
    console.log("Übung 1: Hamster finden");
    const text =
      "Eingang Erbse Gang Erbse Mais Mais Gang Erbse Hafer Gang Hamster Gang Erbse Mais Hafer Gang Erbse Gang Erbse Gang Erbse Hafer Hafer Ausgang";
    console.log('"Hamster" beginnt an Position ' + text.indexOf("Hamster"));
    break;

  case 2:
    console.log("Übung 2: Eingabe überprüfen");
    let vorName = prompt("Was ist dein Vorname?");
    let nachName = prompt("Was ist dein Nachname?");
    let alter = prompt("Was ist dein Alter?");
    let geschlecht = prompt("Was ist dein Geschlecht?");

    if (vorName.length < 2 || nachName.length < 2) {
      console.log(
        "Vorname und Nachname müssen mindestens 2 Zeichen lang sein."
      );
    } else if (vorName.length > 35 || nachName.length > 35) {
      console.log(
        "Vorname und Nachname müssen kürzer als 36 Zeichen lang sein."
      );
    }

    if (alter > 125) console.log("Das Alter muss unter 125 sein.");

    if (geschlecht != "w" && geschlecht != "m")
      console.log("Das Geschlecht muss m oder w sein.");

    console.log("Willkommen.");
    break;

  case 3:
    console.log("Übung 3: Schaltjahre");
    let jahr = prompt("Welches Jahr möchtest du überprüfen?");
    let boolSchaltjahr = false;

    if (jahr % 400 == 0 || (jahr % 100 != 0 && jahr % 4 == 0))
      boolSchaltjahr = true;

    console.log(
      "Das Jahr " +
        jahr +
        " ist " +
        (boolSchaltjahr ? "ein" : "KEIN") +
        " Schaltjahr!"
    );
    break;

  case 4:
    console.log("Übung 4: IBAN verstecken");
    let klareIBAN = prompt("Gib deine IBAN ein:");
    if (klareIBAN.length != 22)
      console.error("Die IBAN muss 22 Zeichen lang sein");

    if (isNaN(parseInt(klareIBAN))) console.error("Die Eingabe ist keine Zahl");

    let letzteVier = klareIBAN.slice(-4, klareIBAN.length);
    letzteVier = letzteVier.slice(0, 2) + " " + letzteVier.slice(2, 4);

    let versteckteIBAN = letzteVier.padStart(22, "**** ");
    console.log("Deine versteckte IBAN ist " + versteckteIBAN);

    break;

  default:
    console.error(
      'Falsche eingabe: "' + aufgabe + '" muss eine Zahl von 1 bis 4 sein.'
    );
}
