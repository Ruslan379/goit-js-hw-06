const refs = {
    input: document.querySelector('#validation-input'),
};


const val = Number(refs.input.dataset.length)
console.log(val);

refs.input.addEventListener('blur', onInputValidation);
// console.log(refs.nameLabel.textContent);


function onInputValidation(event) {

    // console.log(event.currentTarget.value.length);

    if (event.currentTarget.value.length === val) {
        refs.input.classList.remove("invalid");
        refs.input.classList.add('valid');
    }
    else {
        refs.input.classList.remove("valid");
        refs.input.classList.add('invalid');
    }
};
