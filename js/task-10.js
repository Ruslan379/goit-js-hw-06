function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


function createBoxes(amount) {

}


const refs = {
    div: document.querySelector('#controls'),
    buttonCreate: document.querySelector('[data-create]'),
    buttonDestroy: document.querySelector('[data-destroy]'),
};

const input = refs.div.firstElementChild;
// console.log(input);

input.addEventListener('click', event => {
  // console.log("Вешаю слушателя события на нопку buttonChangeColor");
  const amount = input.value
  console.log("amount:", amount);

  const randomColor = getRandomHexColor();
  // console.log(randomColor);


});