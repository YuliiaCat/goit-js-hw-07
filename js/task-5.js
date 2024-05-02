'use strict';

const button = document.querySelector(".change-color");
button.addEventListener("click", () => {
  const body = document.body;
  const elementsWithColorClass = document.querySelectorAll('.color');

  const randomHexColor = getRandomHexColor();

  body.style.backgroundColor = randomHexColor;
  elementsWithColorClass.forEach(element => {
    element.style.color = randomHexColor;
  });
});


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
