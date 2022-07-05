function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
    buttonChangeColor: document.querySelector('.change-color'),
    colorValue: document.querySelector('.color'),
    body: document.body,
};

// console.log(refs.colorValue.textContent);


refs.buttonChangeColor.addEventListener('click', event => {
  // console.log("Вешаю слушателя события на нопку buttonChangeColor");

  const bodyColor = getRandomHexColor();
  // console.log(bodyColor);

  refs.body.style.backgroundColor = bodyColor;

  refs.colorValue.textContent = bodyColor;

});

// console.log(getRandomHexColor());