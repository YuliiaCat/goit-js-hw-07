'use strict';

const categoriesTotal = document.querySelectorAll(".item");
console.log(`Number of categories: ${categoriesTotal.length}`);

const categoryTitles = document.querySelectorAll("h2");
const categoryElements = document.querySelectorAll("li");

function getCategName(categoryTitles) {
  categoryTitles.forEach((item) => {
    const categoryTitle = `Category: ${item.textContent}`;
    console.log(categoryTitle);
  });
}

function getNumsOfElements(categoryElements) {
  categoryElements.forEach((elem) => {
    const numsOfElements = `Elements: ${elem.length}`;
    console.log(numsOfElements);
  });
}

getCategName(categoryTitles);
getNumsOfElements(categoryElements);