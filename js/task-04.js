const refs = {
  decrBtn: document.querySelector('[data-action="decrement"]'),
  incrBtn: document.querySelector('[data-action="increment"]'),
  counterValue: document.querySelector('#value'),
};

refs.counterValue.Value = 0;


// console.log("==========================================");
// console.log(refs.decrBtn);
// console.log(refs.decrBtn.textContent);
// console.log();

// console.log(refs.incrBtn);
// console.log(refs.incrBtn.textContent);
// console.log();

// console.log(refs.counterValue);
// console.log(refs.counterValue.textContent);
// console.log("==========================================");


refs.decrBtn.addEventListener('click', event => {
    // console.log('Вешаю слушателя события на нопку decrement (-1)');
    refs.counterValue.Value -= 1;
    // console.log(refs.counterValue.Value);
    refs.counterValue.textContent = refs.counterValue.Value;
    
});


refs.incrBtn.addEventListener('click', event => {
    // console.log('Вешаю слушателя события на нопку increment (+1)');
    refs.counterValue.Value += 1;
    // console.log(refs.counterValue.Value);
    refs.counterValue.textContent = refs.counterValue.Value;
});