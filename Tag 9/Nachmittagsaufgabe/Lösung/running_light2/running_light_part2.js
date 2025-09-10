"use strict";

const LIGHTS = document.querySelectorAll("img[alt=bulb]"); // alle Lampen selektiert

const init = function () {

   for (let i = 0; i < LIGHTS.length; i++) {
      LIGHTS[i].addEventListener("mouseenter", function () {
         // alle Lamoen ausschalten
         for (let k = 0; k < LIGHTS.length; k++) {
            console.log(LIGHTS[k].src);
            LIGHTS[k].src = "light_off.png";
         }
         console.log(i);
         nextLightOn(i);
      });
   }
};

let nextLightOn = function (index) {
   let nextLight;
   if (index === LIGHTS.length - 1) nextLight = 0;
   else nextLight = index + 1;
   LIGHTS[nextLight].src = "light_on.png";
};

init(); 