const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listCategories = document.querySelector('#ingredients')
// console.log(listCategories);

// const l = ingredients.length
// console.log(l);

// const elLi = document.createElement("li");
// console.log(elLi);

// elLi.textContent = "Potatoes";
// console.log(elLi.textContent);
// console.log(elLi);

//! 1-ый вариант: (добавляет в DOM каждый элемент <li> в цикле на каждой итерации)
// for (let i = 0; i < ingredients.length; i+=1) {
//   const elLi = document.createElement("li");
//   elLi.textContent = ingredients[i];
//   elLi.classList.add("item");
//   listCategories.appendChild(elLi) 
// };
//!___________________________________________________

//! 2-ый вариант (добавляет в DOM все элементы <li> за один раз):
const arrLi = []

for (let i = 0; i < ingredients.length; i+=1) {
  const elLi = document.createElement("li");
  elLi.textContent = ingredients[i];
  elLi.classList.add("item");
  arrLi.push(elLi);
};

listCategories.append(...arrLi);
// console.log(listCategories);
  //!___________________________________________________