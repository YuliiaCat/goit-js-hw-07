'use strict';

const categoriesTotal = document.querySelectorAll(".item");
console.log(`Number of categories: ${categoriesTotal.length}`);

const categoryTitles = document.querySelectorAll("h2");
const categoryElements = document.querySelectorAll("ul");

function getCategName(categoryTitles) {
  categoryTitles.forEach((item) => {
    const categoryTitle = `Category: ${item.textContent}`;
    console.log(categoryTitle);
  });
}

function getNumOfElements(categoryElements) {
  categoryElements.forEach((elem) => {
    const numOfElements = ulElement.querySelectorAll("li").length;
    console.log(`Elements: ${numOfElements}`);
  });
}

getCategName(categoryTitles);
getNumOfElements(categoryElements);