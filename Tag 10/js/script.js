"use strict"; // Elemente// Klick auf ein li (delegation)// Klick auf ein li (delegation)
document.getElementById("liste").addEventListener("click", (e) => {
  if (e.target.tagName === "LI")
    console.log("clicked LI:", e.target.textContent);
});

// Button-press (Enter) im Textfeld
document.getElementById("field").addEventListener("keydown", (e) => {
  if (e.key === "Enter") console.log("Enter in field — value:", e.target.value);
  if (e.shiftKey && e.key === "Enter") console.log("Shift+Enter pressed");
});

// Global key combos
window.addEventListener("keydown", (e) => {
  if (e.ctrlKey && e.key.toLowerCase() === "k") {
    e.preventDefault();
    console.log("Ctrl+K pressed — shortcut triggered");
  }
});

// Scroll: einfache Anzeige der Scroll-Position (debounced minimal)
let scrollTimer;
window.addEventListener("scroll", () => {
  if (scrollTimer) clearTimeout(scrollTimer);
  scrollTimer = setTimeout(() => console.log("scroll Y:", window.scrollY), 10);
});

// Mouse move: show position relative to viewport and element under cursor
window.addEventListener("mousemove", (e) => {
  console.log(
    `mouse: client(${e.clientX},${e.clientY}) page(${e.pageX},${e.pageY}) target=${e.target.tagName}`
  );
});

// Window resize (screen position/size)
window.addEventListener("resize", () => {
  console.log(
    "window size:",
    window.innerWidth,
    "x",
    window.innerHeight,
    " — screen:",
    screen.width,
    "x",
    screen.height
  );
});

// Button click (first button in form)
document.querySelector("form button").addEventListener("click", (e) => {
  console.log("button clicked — form submit prevented");
  e.preventDefault();
});

// Pointer down with info about button (left/middle/right)
window.addEventListener("pointerdown", (e) => {
  const btn = e.button === 0 ? "left" : e.button === 1 ? "middle" : "right";
  console.log("pointerdown:", btn, "at", e.clientX, e.clientY);
});
