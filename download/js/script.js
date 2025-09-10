"use strict";

window.sessionStorage.setItem("car", "Ford Focus");
window.localStorage.setItem("firstname", "jessica");

const DB_NAME = "Einkaufsliste";
const DB_VERSION = 1;
let db;

// DB-Verbindung herstellen
const request = indexedDB.open(DB_NAME, DB_VERSION);

// (initial oder update) Tabelle anlegen
request.onupgradeneeded = function (event) {
  db = event.target.result;

  if(!db.objectStoreNames.contains("items")){
    const store
  }
};
