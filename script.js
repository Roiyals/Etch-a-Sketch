"use strict";

let container = document.querySelector(".container");
let button = document.querySelector(".btn");
let defaultSize = 16;

createGrid(defaultSize);

function createGrid(size) {
  for (let i = 0; i < size * size; i++) {
    let divs = document.createElement("div");
    let divSize = 100 / size + "%";

    divs.style.minWidth = divSize;
    divs.style.minHeight = divSize;
    divs.style.flexGrow = "1";
    divs.addEventListener("mouseover", (event) => hoverColors(event.target));

    container.appendChild(divs);
  }
}

button.addEventListener("click", () => {
  let userInput = prompt("Enter a number from 1 - 100");
  userInput = Number(userInput);
  const allDivs = container.querySelectorAll("div");
  allDivs.forEach((div) => div.remove());

  if (userInput > 100) {
    alert("Too much!");
  } else if (!Number.isInteger(userInput)) {
    alert("Not a number!");
  } else {
    createGrid(userInput);
  }
});

function hoverColors(div) {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  div.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}
