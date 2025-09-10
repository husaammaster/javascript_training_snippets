"use strict";

const init = () => {
  // H1 Überschrift
  const elH1 = document.createElement("h1");
  elH1.innerHTML = "Überschrift";
  document.body.append(elH1);

  const planeten = [
    {
      name: "Merkur",
      reihenfolge: 1,
      durchmesser_km: 4879,
      masse_kg: 3.3e23,
      monde: 0,
      typ: "Gesteinsplanet",
    },
    {
      name: "Venus",
      reihenfolge: 2,
      durchmesser_km: 12104,
      masse_kg: 4.87e24,
      monde: 0,
      typ: "Gesteinsplanet",
    },
    {
      name: "Erde",
      reihenfolge: 3,
      durchmesser_km: 12742,
      masse_kg: 5.97e24,
      monde: 1,
      typ: "Gesteinsplanet",
    },
    {
      name: "Mars",
      reihenfolge: 4,
      durchmesser_km: 6779,
      masse_kg: 6.42e23,
      monde: 2,
      typ: "Gesteinsplanet",
    },
    {
      name: "Jupiter",
      reihenfolge: 5,
      durchmesser_km: 139820,
      masse_kg: 1.9e27,
      monde: 95,
      typ: "Gasriese",
    },
    {
      name: "Saturn",
      reihenfolge: 6,
      durchmesser_km: 116460,
      masse_kg: 5.68e26,
      monde: 146,
      typ: "Gasriese",
    },
    {
      name: "Uranus",
      reihenfolge: 7,
      durchmesser_km: 50724,
      masse_kg: 8.68e25,
      monde: 28,
      typ: "Eisriese",
    },
    {
      name: "Neptun",
      reihenfolge: 8,
      durchmesser_km: 49244,
      masse_kg: 1.02e26,
      monde: 16,
      typ: "Eisriese",
    },
  ];

  // H1 Überschrift
  const elDiv = document.createElement("div");
  elDiv.innerHTML = "Div Element";
  document.body.append(elDiv);
};

init();
