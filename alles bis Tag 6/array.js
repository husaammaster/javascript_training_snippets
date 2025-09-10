"use strict";

const monopolySpielBrett = [
  "Münchner Straße",
  "Wiener Straße",
  "Berliner Straße",
  "Theaterstraße",
  "Museumstraße",
  "Opernplatz",
  "Nordbahnhof",
  "Lessingstraße",
  "Schillerstraße",
  "Wasserwerk",
  "Goethestraße",
  "Rathausplatz",
  "Hauptstraße",
  "Bahnhofstraße",
  "Hauptbahnhof",
];

let teilStrecke1 = {
  start: "Opernplatz",
  ende: "Wasserwerk",
};
let teilStrecke2 = {
  start: "Wasserwerk",
  ende: "Hauptbahnhof",
};

function logPfad(strecke, spielBrett) {
  let startInd = spielBrett.indexOf(strecke.start);
  let endInd = spielBrett.indexOf(strecke.ende);
  let zwischenHalte = spielBrett.slice(startInd, endInd + 1);

  //   console.log(startInd, endInd, zwischenHalte);

  let ausgabe = `Los geht's von ${strecke.start} bis ${strecke.ende}!\n`;

  ausgabe += `    ${strecke.start}\n`;
  for (let i = 1; i < zwischenHalte.length; i++) {
    ausgabe += ` -> ${zwischenHalte[i]}\n`;
  }

  ausgabe += `Der weg braucht insgesamt ${
    zwischenHalte.length - 1
  } Sprünge. Würfele also eine ${Math.min(6, zwischenHalte.length - 1)}!\n\n`;
  return ausgabe;
}

console.log(logPfad(teilStrecke1, monopolySpielBrett));
console.log(logPfad(teilStrecke2, monopolySpielBrett));

console.log(
  "Neue Ideen: Ein alert zum zufälligen Würfeln mit Ausgabe, wo man landet.\nLoop bis man auf dem Nordbahnhof oder Hauptbahnhof landet."
);

let zielFelder = [
  monopolySpielBrett.indexOf("Nordbahnhof"),
  monopolySpielBrett.indexOf("Hauptbahnhof"),
];

let aktuellePosition = 0;
let maxPosition = monopolySpielBrett.length - 1;
while (!zielFelder.includes(monopolySpielBrett[aktuellePosition])) {
  let naechstesZiel =
    aktuellePosition < monopolySpielBrett.indexOf("Nordbahnhof")
      ? "Nordbahnhof"
      : "Hauptbahnhof";
  let zielInd = monopolySpielBrett.indexOf(naechstesZiel);

  let geplanterWeg = {
    start: monopolySpielBrett[aktuellePosition],
    ende: naechstesZiel,
  };

  confirm(logPfad(geplanterWeg, monopolySpielBrett) + "\nWirf den Würfel!");

  let zufälligerWürfel = 1 + Math.floor(6 * Math.random());
  let neuePos =
    (aktuellePosition + zufälligerWürfel) % monopolySpielBrett.length;
  confirm("");
}
