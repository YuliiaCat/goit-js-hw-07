'use strict';

const categoriesTotal = document.querySelectorAll(".item");
console.log(`Number of categories: ${categoriesTotal.length}`);

const categoryTitles = document.querySelectorAll("h2");

function getCategName(categoryTitles) {
  categoryTitles.forEach((item) => {
    const categoryTitle = `Category: ${item.textContent}`;
    console.log(categoryTitle);
  });
}

getCategName(categoryTitles);