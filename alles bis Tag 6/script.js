"use strict";

function greetUser(username) {
  console.log("Hallo " + username + "! Willkommen!");
}

function getUsername() {
  return prompt("Was ist dein Name?");
}

function askForAge() {
  let age = prompt("Wie alt bist du?");
  console.log("Du bist " + age + " Jahre alt.");
}

let username = getUsername();
greetUser(username);
askForAge();
