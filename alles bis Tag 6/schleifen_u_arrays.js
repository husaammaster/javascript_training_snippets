"use strict";

let aufgabe = prompt("Welche Übung?");

switch (parseInt(aufgabe)) {
  case 1:
    console.log("Übung 1: zu Fahrenheit umrechnen");

    let toFahrenheit = function (cels) {
      return (cels * 9) / 5 + 32;
    };

    console.log("0C entspricht " + toFahrenheit(0) + "F");
    console.log("20C entspricht " + toFahrenheit(20) + "F");
    console.log("100C entspricht " + toFahrenheit(100) + "F");

    break;

  case 2:
    let gewichtGestern = parseInt(
      prompt("Was war dein Gewicht gestern, Thor?")
    );
    let gewichtHeute = parseInt(prompt("Was ist dein Gewicht heute, Thor?"));

    if (gewichtGestern < gewichtHeute) {
      let steigerung = 100 * (gewichtHeute / gewichtGestern - 1);
      console.log(
        "Oh nein! Dein Gewicht ist um " +
          steigerung.toFixed(2) +
          "% gestiegen.."
      );
    } else if (gewichtGestern > gewichtHeute) {
      let verringerung = 100 * (1 - gewichtHeute / gewichtGestern);
      console.log(
        "Gut gemacht? Dein Gewicht ist um " +
          verringerung.toFixed(2) +
          "% gesunken.."
      );
    } else {
      console.log("Strang dich an weiterhin gesund zu bleiben!");
    }

    break;

  case 3:
    console.log("Übung 3: Rezept");

    let zutaten = [
      "6cl Zitronensaft, frisch gepresst",
      "3cl Zuckersirup",
      "1 Eiweiß, frisch",
      "Eiswürfel",
    ];

    function display(name, arr) {
      console.log("Anzeige von " + name + ":");
      if (typeof arr == typeof []) {
        for (let i = 0; i < arr.length; i++) {
          console.log("  " + i + ": " + arr[i]);
        }
      }
      console.log("\n");
    }

    // let arr2 = ["a", "b", "c", "d", "e"];
    // display("Arr2", arr2);

    display("Zutaten", zutaten);

    let varX = 5;
    console.log("Array test:");
    console.log(Array.isArray(zutaten));
    console.log(Array.isArray(varX));

    console.log('zutaten.unshift("10cl Bourbon Whisky")');
    zutaten.unshift("10cl Bourbon Whisky");
    display("Zutaten", zutaten);

    console.log('zutaten.push("2 Streifen Zitronenschale zum Garnieren")');
    zutaten.push("2 Streifen Zitronenschale zum Garnieren");
    display("Zutaten", zutaten);

    console.log('zutaten.splice(1, 1, "6cl Limettensaft, frisch gepresst")');
    zutaten.splice(1, 1, "6cl Limettensaft, frisch gepresst");
    display("Zutaten", zutaten);

    console.log("\n\n\n");

    let zutatenString = (function (arr) {
      let ausgabe = "Zutaten:\n";
      if (Array.isArray(arr)) {
        for (let i = 0; i < arr.length; i++) {
          ausgabe += " - " + arr[i] + "\n";
        }
      }
      return ausgabe;
    })(zutaten);

    let titelString = "  Frisches Whisky Sour Rezept  "
      .padStart(45, "~")
      .padEnd(60, "~");
    let anleitungString =
      "Anleitung:\n\nWhiskey, Limettensaft, Zuckersirup und Eiweiß in einen Cocktailshaker geben und etwa 10 Sekunden kräftig shaken. \n4-5 Eiswürfel in den Shaker geben und nochmals 10-15 Sekunden kräftig shaken.\nInhalt des Shakers durch ein Sieb in zwei mit frischen Eiswürfeln gefüllte Gläser gießen.\nZitronenschalen zunächst über die Glasränder reiben, dann mit in die Gläser geben. Servieren, sobald sich der Eiweißschaum an der Oberfläche abgesetzt hat.";

    console.log(titelString + "\n\n" + zutatenString + "\n" + anleitungString);

    break;
  default:
    console.error("Keine gültige Übung. Eingabe war " + aufgabe);
}
