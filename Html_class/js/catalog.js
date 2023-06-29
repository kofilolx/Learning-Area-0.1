import { PRODUCTS } from "./products.js";

const app = document.getElementById("app");
const message = document.getElementById("message");

document.getElementById('apply').addEventListener('click', applyFilter);

const product_list = document.createElement('div')
product_list.className = 'product-list'

let products = PRODUCTS

window.onload = (e) => {
  app.appendChild(product_list);

  const params = new URLSearchParams(location.search)

  if (params.has('search')) {
    message.innerText = `${params.get('search')} products`
    products = PRODUCTS.filter((product) => {
      if (product.title.includes(params.get('search')) || product.brand.includes(params.get('search')) ||product.category.includes(params.get('search'))) {
        return product
      }
    })
  }
  
  if (products.length === 0) {
    message.innerText = `No Products Found for ${params.get('search')}`
    products = PRODUCTS
  }

  product_list.innerHTML = ""
  createProducts();
};

function createProducts() {
  products.map((product, index) => {
    const product_card = document.createElement("a");
    product_card.href = `./details.html?id=${product.id}`
    product_card.innerHTML = `<div class="product-card">
      <img src="${product.img}" alt="${product.title}" />
      <div style="padding: 1em 0 0 0; width: 100%">
      <h4>${product.title}</h4>
      <p>GHS ${product.price}</p>
      </div>
      </div>
      `;

    product_list.appendChild(product_card);
    // console.log("here");
  });
}

function applyFilter() {
  const new_products = products.filter((product) => (Number)(product.price) <= document.getElementById('priceRange').value)

  if (new_products.length === 0) {
    message.innerText = "No Product Found in the Range"
    return
  }

  products = new_products

  product_list.innerHTML = ""
  createProducts();
}