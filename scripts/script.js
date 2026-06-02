let products = [
    {
        name: "Lay's West Indies Hot 'n' Sweet Chilli",
        image: "images/Products/orange-lays.webp",
        price: 30,


    }
    ,
    {
        name: "Kellogg's Multigrain Chocos Fills Double Chocolaty",
        image: "images/Products/kellogs.webp",
        price: 91,

    },

]

let productHTML = '';


for (let product in products) {
    productHTML += `<div class="product-card">
        <div class="upper-half">
            <img src="${products[product].image}" alt="" class="logo2">
                <hr>
                    <p class="product-name">${products[product].name} </p>

                </div>
                <div class="lower-half">
                    <p class="price">₹${products[product].price}</p>
                    <button class="btn add-to-cart js-cart-button" data-name="${products[product].name}" data-price="${products[product].price}" data-image="${products[product].image}">Add</button>


                </div>

        </div> `
}

let productGrid = document.querySelector('.products-grid');
let cartCount = document.querySelector('.cart-count');
let cartNumber = 0;

productGrid.innerHTML = productHTML;

/* ADDING BUTTON LOGIC */

let buttons = document.querySelectorAll('.js-cart-button');
let gridCart = document.querySelector('.carts-grid');
console.log(gridCart)

for (let button of buttons) {
    button.addEventListener('click', (e) => {
        let name = button.dataset.name;
        let price = button.dataset.price;
        let image = button.dataset.image;
        let info = [name, price, image];


        cartNumber++

        cartCount.innerHTML = cartNumber;


    })
}


