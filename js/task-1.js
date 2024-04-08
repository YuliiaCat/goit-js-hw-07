'use strict';

const categoriesTotal = document.querySelectorAll(".item");
console.log(`Number of categories: ${categoriesTotal.length}`);

const categoryName = document.querySelectorAll("h2");

function getCategName(categoryName) {

  categoryName.forEach(function (item) {
    console.log(`Category: ${item}`);
  });
}