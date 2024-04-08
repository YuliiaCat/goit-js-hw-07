'use strict';

const categoriesTotal = document.querySelectorAll(".item");
console.log(`Number of categories: ${categoriesTotal.length}`);

const categoryName = document.querySelectorAll("h2");

function getCategName(categoryName) {
  const categName = '';

  categoryName.forEach((item) => {
    categName = `Category: ${item}`;
  });
  console.log(categName);
}