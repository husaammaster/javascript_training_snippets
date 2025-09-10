"use strict";

// indexedDB initialisieren
const DB_NAME = "Einkaufsliste";
const DB_VERSION = 1;
let db;

// Request erstellen, um DB-Verbindung herzustellen (anlegen/öffnen)
const request = indexedDB.open(DB_NAME, DB_VERSION);

// (initiale) Tabelle anlegen
// wird über Ereignis upgradeneeded beim 1. Mal angelegt oder bei Versionswechsel
request.onupgradeneeded = function(event) {
    db = event.target.result;

    // Objectstore erstellen, wenn noch nicht vorhanden
    if (!db.objectStoreNames.contains("items")) {

        const store = db.createObjectStore("items",  { keyPath: "id", autoIncrement: true });

        // Index für name erstellt - wichtig für Zugriff über Artikelnamen
        store.createIndex("name", "name", {unique: true});
    }
    console.log("DB und ObjectStore erstellt");
};

function 



request.onerror = function(event){
    if(event.target.error.name = )
    console.Log("Dazensatz erfolgreich gespeoichert")
}
