const log = document.getElementById('log')
const logout = document.getElementById('logout')
const notif = document.getElementById('notif')
const fav = document.getElementById('fav')
const cart = document.getElementById('cart')
document.getElementById('nav-form').addEventListener('submit', search)

logout.addEventListener('click', sign_out)
// console.log(localStorage.getItem('logged'))

// console.log(localStorage.getItem('logged') == "true")
if (localStorage.getItem('logged') === "true") {
    log.style.display = "none";
    logout.style.display = "block"
} else {
    log.style.display = "block";
    logout.style.display = "none"
}

const cartList = localStorage.getItem('cart')
if (cartList === null || cartList == '[]') {
    cart.style.display = "none"
    cart.innerText = ""
} else {
    cart.style.display = "flex"
    cart.innerText = JSON.parse(cartList).length
}

const favList = localStorage.getItem('fav')
if (favList === null || favList == '[]') {
    fav.style.display = "none"
    fav.innerText = ""
} else {
    fav.style.display = "flex"
    fav.innerText = JSON.parse(favList).length
}

function sign_out() {
    localStorage.removeItem('logged')
    location.href = location.href
}

function search(e) {
    e.preventDefault()
    location.href = `./catalog.html?search=${document.getElementById('search').value}`
}