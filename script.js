"use strict";

let container = document.querySelector(".container");

for (let i = 0; i < 256; i++) {
  let divs = document.createElement("div");
  divs.style.minWidth = "6.25%";
  divs.style.minHeight = "6.25%";
  divs.addEventListener("mouseover", (event) => {
    event.target.style.backgroundColor = "black";
  });

  container.appendChild(divs);
}
