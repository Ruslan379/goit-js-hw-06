const refs = {
    input: document.querySelector('#font-size-control'),
    text: document.querySelector('#text'),
};

// const changeSize = refs.input.value
// console.log(changeSize);

// refs.text.style.fontSize = "24px";
// console.log(refs.text);
// const textSize = refs.text.style.fontSize
// console.log(textSize);



refs.input.addEventListener('input', onInputsize);

function onInputsize(event) {
    const changeSizeValue = event.currentTarget.value
    // console.log(changeSizeValue);

    refs.text.style.fontSize = changeSizeValue + "px" 
    // console.log(refs.text.style.fontSize); 
};
