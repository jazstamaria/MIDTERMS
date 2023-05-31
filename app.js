let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: '6pc. Chickenjoy Solo',
        image: '1.png',
        price: 435
    },
    {
        id: 2,
        name: '6pc. Chickenjoy with Palabok Family Pan',
        image: '2.png',
        price: 880
    },
    {
        id: 3,
        name: 'Chickenjoy Bucket Family Meals',
        image: '3.png',
        price: 325
    },
    {
        id: 4,
        name: ' 1pc. Chickenjoy w/ Burger Steak & Half Jolly Spaghetti Super Meal',
        image: '4.png',
        price: 211
    },
    {
        id: 5,
        name: '1pc. Chickenjoy w/ Palabok',
        image: '5.png',
        price: 205
    },
    {
        id: 6,
        name: '1pc. Chickenjoy w/ Burger Steak',
        image: '6.png',
        price: 140
    },
    {
        id: 7,
        name: "1pc. Chickenjoy w/ Creamy Macaroni Soup",
        image: '7.png',
        price: 154
    },
    {
        id: 8,
        name: "1pc. Chickenjoy w/ Double Rice",
        image: '8.png',
        price: 143
    },
    {
        id: 9,
        name: "Longganisa",
        image: '9.png',
        price: 158
    },
    {
        id: 10,
        name: 'Beef Tapa',
        image: '10.png',
        price: 158
    },
    {
        id: 11,
        name: 'Corned Beef',
        image: '11.png',
        price: 158
    },
    {
        id: 12,
        name: 'Breakfast Hotdog',
        image: '12.png',
        price: 106
    },
    {
        id: 13,
        name: '2pc. Pancakes',
        image: '13.png',
        price: 75
    },
    {
        id: 14,
        name: 'Bacon, Egg, & Cheese Pancake Sandwich',
        image: '14.png',
        price: 96
    },
    {
        id: 15,
        name: ' 2 1pc. Burger Steak w/ Drink and 2 Choco Mallow Pie',
        image: '15.png',
        price: 250
    }
];
let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="image/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Cart</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="image/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}