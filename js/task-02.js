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

//TODO 1-ый вариант: (добавляет в DOM каждый элемент <li> в цикле на каждой итерации)
// for (let i = 0; i < ingredients.length; i+=1) {
//   const elLi = document.createElement("li");
//   elLi.textContent = ingredients[i];
//   elLi.classList.add("item");
//   listCategories.appendChild(elLi) 
// };
//TODO___________________________________________________




  //TODO 2-ый вариант (добавляет в DOM все элементы <li> за один раз):
// const arrLi = []

// for (let i = 0; i < ingredients.length; i+=1) {
//   const elLi = document.createElement("li");
//   elLi.textContent = ingredients[i];
//   elLi.classList.add("item");
//   arrLi.push(elLi);
// }; 

// // console.log(arrLi);
// listCategories.append(...arrLi);
// // console.log(listCategories);
  //TODO___________________________________________________



//TODO 3-ый вариант (создает новый массив элементов <li> с помощью .map и добавляет в DOM все элементы <li> за один раз):
// const arrLi = ingredients.map(ingredient => {
//   // console.log(ingredient);
//   const elLi = document.createElement("li");
//   elLi.textContent = ingredient;
//   elLi.classList.add("item");
//   return elLi;
// });

// // console.log(arrLi);
// listCategories.append(...arrLi);
// // console.log(listCategories);
  //TODO___________________________________________________



//!         4-ый вариант:
//!   (создает новый массив элементов <li> 
//!   с помощью ф - ции и .map + колбэк => 
//!   и добавляет в DOM все элементы <li> за один раз):

const addedLiOnList = arr => {
  return arr.map(ingredient => {
    // console.log(ingredient);
    const elLi = document.createElement("li");
    elLi.textContent = ingredient;
    elLi.classList.add("item");
    return elLi;
  });
};

const arrLi = addedLiOnList(ingredients); 
// console.log(arrLi);

listCategories.append(...arrLi);
// console.log(listCategories);
  //!___________________________________________________