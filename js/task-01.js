
const listCategories = document.querySelectorAll('li.item');
// console.log(listCategories);

console.log("=========================================");


console.log("Number of categories:", listCategories.length);
console.log("");


for (const iterator of listCategories) {
    // console.log(iterator); // li.item    
    console.log("Category:", iterator.firstElementChild.textContent);
    console.log("Elements:", iterator.lastElementChild.childElementCount);
    console.log("");
}

console.log("=========================================");

// const categoryTitle = document.querySelectorAll('h2');
// console.log(categoryTitle);
// console.log("categoryTitle[0].textContent:", categoryTitle[0].textContent);


// for (const iterator of categoryTitle) {
//     console.log("categoryTitle.textContent:", iterator.textContent);
// }

