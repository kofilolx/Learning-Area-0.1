import { PRODUCTS } from "./products.js";

const product_list = document.getElementById('cart-product-list');
const items = document.getElementById('items');
const no_item = document.getElementById('no-item')
const clear_btn = document.getElementById('clear')
const cart_total_price = document.getElementById('price');
const checkout = document.getElementById('checkout')
clear_btn.addEventListener('click', clearCart)

let total_price = 0;

window.onload = (e) => {
    if (localStorage.getItem('cart') === null || localStorage.getItem('cart') == '[]') {
        return;
    }

    no_item.style.display = "none"
    product_list.style.display = 'block'
    clear_btn.disabled = false
    
    const cartList = JSON.parse(localStorage.getItem('cart'));

    if (cartList.length !== 0) {
        checkout.style.display = "block"
    }

    items.innerText = cartList.length
    // console.log();
    cartList.map((id, index) => {
        const product = PRODUCTS[(Number)(id) -1]
        const product_card = document.createElement('a')
        product_card.href = `../details.html?id=${id}`
        product_card.innerHTML = `<div class="cart-card">
        <img src='${product.img}' alt='beats'/>
        <div>
        <h3>${product.title}</h3>
        <p style="margin: 0.2em 0">GHS ${product.price}</p>
        <h5>${product.brand}</h5>
        </div>
        </div>`

        total_price += (Number)(product.price)

        product_list.appendChild(product_card)
    })

    checkout.href = `./checkout.html?total=${total_price}&items=${cartList.length}`
    cart_total_price.innerText = "GHS " + total_price
}

function clearCart() {
    localStorage.removeItem('cart')
    location.replace = location.href
}