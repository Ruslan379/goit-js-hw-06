const refs = {
    input: document.querySelector('#name-input'),
    nameLabel: document.querySelector('#name-output'),
};

refs.input.addEventListener('input', onInput);
// console.log(refs.nameLabel.textContent);



function onInput(event) {
    // console.log('Инпут получил фокус - событие input');
    // console.log(event.currentTarget.value);
    // console.log(refs.nameLabel.textContent);
    if (event.currentTarget.value === "") 
        refs.nameLabel.textContent = "Anonymous"
        else refs.nameLabel.textContent = event.currentTarget.value;
}

