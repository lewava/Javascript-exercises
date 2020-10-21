/*---------- UPPGIFT 1 ----------*/

let input = document.querySelector('input');
let btn = document.querySelector('button');
let ptag = document.querySelector('p');

function changeText(e) {

    ptag.textContent = input.value;
    input.value = '';

}

btn.addEventListener('click', changeText);

/*---------- UPPGIFT 2 ----------*/

let calcOutput = document.querySelector('.calc-output');
let calcInput = document.querySelector('.calc-input')
let buttonMinus = document.querySelector('calc-minus')
let buttonPlus = document.querySelector('.calc-plus')
let buttonEquals = document.querySelector('.calc-equals')
let calculation = '';

buttonMinus.addEventListener('click', )

function calculate(input) {
    let tempArray = input.split('');

}