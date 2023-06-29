document.getElementById('sign').addEventListener('submit', signUp)
// document.getElementById('login').addEventListener('submit', login)

function signUp(e) {
    e.preventDefault()
    let user = localStorage.getItem('user');
    if (user !== null) {
        return;
    }

    user = {
        username: document.getElementById('username').value,
        password: document.getElementById('password').value,
        email: document.getElementById('email').value,
        firstname: document.getElementById('firstname').value,
        lastname: document.getElementById('lastname').value,
        phone:document.getElementById('phone').value
    }

    localStorage.setItem('user', JSON.stringify(user))

    location.href = "./login.html"
}