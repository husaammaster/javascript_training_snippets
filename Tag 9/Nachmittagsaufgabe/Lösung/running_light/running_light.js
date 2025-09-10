"use strict";

   const IMAGE_FILE_ON = "light_on.png";
   const IMAGE_FILE_OFF = "light_off.png";
   const LIGHTS = document.querySelectorAll("img[alt=bulb]");

   // selektieren von Inhalten durch User verhindern (bei Bedarf)
   document.body.style.userSelect = "none";

/* 
   {
      document.addEventListener("click", function () {
         let nextLight, currentLight;

         for (let i = 0; i < LIGHTS.length; i++) {
            if (LIGHTS[i].src.endsWith(IMAGE_FILE_ON)) currentLight = i;
         }

         if (currentLight === LIGHTS.length - 1) nextLight = 0;
         else nextLight = currentLight + 1;

         LIGHTS[currentLight].src = IMAGE_FILE_OFF;
         LIGHTS[nextLight].src = IMAGE_FILE_ON;
      });
   } 
*/

// oder kürzer: 
{
   let currentPosition = 0;

   document.addEventListener("click", function () {
      LIGHTS[currentPosition++].src = IMAGE_FILE_OFF;
      currentPosition %= LIGHTS.length;
      LIGHTS[currentPosition].src = IMAGE_FILE_ON;
   });
}