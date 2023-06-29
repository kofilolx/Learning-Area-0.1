import { PRODUCTS } from './products.js'

const detail_image = document.getElementById('image')
const detail_name = document.getElementById('name')
const detail_price = document.getElementById('price')
const detail_brand = document.getElementById('brand')

document.getElementById('cartBtn').addEventListener('click', addToCart)
document.getElementById('favBtn').addEventListener('click', addToFav)

const param = new URLSearchParams(window.location.search)

function addToCart() {
    if (localStorage.getItem("cart") === null) {
        localStorage.setItem('cart', JSON.stringify([]))
    }
    
    const cartList = JSON.parse(localStorage.getItem('cart'))
    console.log(cartList)
    cartList.push(param.get('id'))
    
    localStorage.setItem('cart', JSON.stringify(cartList))
    location.href = location.href
}

function addToFav() {
    if (localStorage.getItem("fav") === null) {
        localStorage.setItem('fav', JSON.stringify([]))
    }
    
    const favList = JSON.parse(localStorage.getItem('fav'))
    console.log(favList)
    if (favList.includes(param.get('id'))) {
        return
    }
    
    favList.push(param.get('id'))
    localStorage.setItem('fav', JSON.stringify(favList))
    location.href = location.href
}

window.onload = (e) => {
    const product = PRODUCTS[param.get('id')-1]
    // console.log(product)
    detail_image.src = `${product.img}`
    detail_name.innerText = product.title
    detail_price.innerText = "GHS " + product.price
    detail_brand.innerText = product.brand
}