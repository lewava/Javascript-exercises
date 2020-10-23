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
let buttonMinus = document.querySelector('.calc-minus')
let buttonPlus = document.querySelector('.calc-plus')
let buttonEquals = document.querySelector('.calc-equals')
let calculation = '';

buttonMinus.addEventListener('click', function() {
    calculation += calcInput.value + ' - ';
    calcOutput.textContent = calculation;
    calcInput.value = '';
});
buttonPlus.addEventListener('click', function() {
    calculation += calcInput.value + ' + ';
    calcOutput.textContent = calculation;
    calcInput.value = '';
});
buttonEquals.addEventListener('click', function() {
    calculation += calcInput.value;
    let temp = eval(calculation);
    calcOutput.textContent = calculation + ' = ' + temp;
    calcInput.value = '';
});

/*---------- UPPGIFT 3 ----------*/

let articles = [{
        name: "Nike skor",
        price: 1000,
        description: "Lorem ipsum dolor sit amet consectetur elit.Accusamus,iste suscipit praesentium aliquid natus unde veniam.Omnis ullam vitae animi voluptas.Asperiores aperiam veniam sapiente necessitatibus et totam velit dolor."
    },
    {
        name: "Filippa K byxa",
        price: 10000,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Accusamus, iste suscipit praesentium aliquid natus unde veniam.Omnis ullam vitae animi voluptas.Asperiores aperiam veniam sapiente necessitatibus et totam velit dolor."
    },
    {
        name: "Adidas tröja",
        price: 2000,
        description: "Lorem ipsum dolor sit amet consectetur elit.Accusamus,iste suscipit praesentium aliquid natus unde veniam.Omnis ullam vitae animi voluptas.Asperiores aperiam veniam sapiente necessitatibus et totam velit dolor."
    },
    {
        name: "Levis jeans",
        price: 1000,
        description: "Lorem ipsum dolor sit amet consectetur elit.Accusamus,iste suscipit praesentium aliquid natus unde veniam.Omnis ullam vitae animi voluptas.Asperiores aperiam veniam sapiente necessitatibus et totam velit dolor."
    },
    {
        name: "Lee jeans",
        price: 1100,
        description: "Lorem ipsum dolor sit amet consectetur elit.Accusamus,iste suscipit praesentium aliquid natus unde veniam.Omnis ullam vitae animi voluptas.Asperiores aperiam veniam sapiente necessitatibus et totam velit dolor."
    },
    {
        name: "Convers skor",
        price: 600,
        description: "Lorem ipsum dolor sit amet consectetur elit.Accusamus,iste suscipit praesentium aliquid natus unde veniam.Omnis ullam vitae animi voluptas.Asperiores aperiam veniam sapiente necessitatibus et totam velit dolor."
    }
];