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

addItems(articles);
order();

function addItems(items) {
    let lastH1 = document.querySelector('.last');
    let body = document.querySelector('body');
    let cart = document.createElement('section');
    let cartH1 = document.createElement('h1');
    cartH1.textContent = 'Varukorg:';
    cart.appendChild(cartH1)
    cart.className = 'cart';
    lastH1.after(cart);

    let cartPos = document.querySelector('.cart');
    let addToCart = 'Lägg till i varukorg';
    let reversedArray = items.reverse();
    for (let i = 0; i < reversedArray.length; i++) {
        let section = document.createElement('section');
        let name = document.createElement('h2');
        let price = document.createElement('h4');
        let desc = document.createElement('p');
        let orderButton = document.createElement('button');
        orderButton.className = 'orderButton';

        section.appendChild(name);
        section.appendChild(price);
        section.appendChild(desc);
        section.appendChild(orderButton);

        name.textContent = reversedArray[i].name;
        price.textContent = reversedArray[i].price;
        desc.textContent = reversedArray[i].description;
        orderButton.textContent = addToCart;

        body.insertBefore(section, cartPos);
    }
}

function order() {
    let orderButtons = document.querySelectorAll('.orderButton');
    let orders = [];

    function Orders(name, price) {
        this.name = name;
        this.price = price;
    }

    for (let i = 0; i < orderButtons.length; i++) {
        const btn = orderButtons[i];

        btn.addEventListener('click', function() {

            let parent = btn.parentNode;
            tempObj = new Orders(parent.children[0].textContent, parent.children[1].textContent)
            orders.push(tempObj);

            addToCart(orders);
        });
    }
}

function addToCart(orders) {
    let cart = document.querySelector('.cart')
    let totalprice = 0;

    cart.innerHTML = '<h1> Varukorg: </h1>';

    for (let i = 0; i < orders.length; i++) {
        let name = document.createElement('h3');
        name.textContent = orders[i].name;
        cart.appendChild(name);

        totalprice += parseInt(orders[i].price);
    }

    let price = document.createElement('h4');
    price.textContent = 'Total price: ' + totalprice;
    cart.appendChild(price);
}