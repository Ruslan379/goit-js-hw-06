const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const limagesCategories = document.querySelector('.gallery')
// console.log(limagesCategories);

  //!       1-ый вариант (правильный):

for (const image of images) {
  // console.log(image.alt);
  limagesCategories.insertAdjacentHTML('beforeend', `<img src= ${image.url} alt= ${image.alt} />`);
}


//!         2-ый вариант:
//!   (создает новый массив элементов <img> 
//!   с помощью ф - ции и .map + колбэк => 
//!   и добавляет в DOM все элементы <img> за один раз):

// const addedlimagesOnList = arr => {
//   return arr.map(image => {
//     // console.log(image);
//     const imageEl = document.createElement("img");
//     imageEl.src = image.url;
//     imageEl.alt = image.alt;
//     // imageEl.width = 640;
//     return imageEl;
//   });
// };

// const arrLi = addedlimagesOnList(images); 
// // console.log(arrLi);

// limagesCategories.append(...arrLi);
// // console.log(listCategories);
  //!___________________________________________________







