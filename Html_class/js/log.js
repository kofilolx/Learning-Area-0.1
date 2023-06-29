document.getElementById('login').addEventListener('submit', login)
// document.getElementById('login').addEventListener('submit', login)

function login(e) {
    e.preventDefault()
    let user = localStorage.getItem('user');
    if (user === null) {
        return;
    }
    user = JSON.parse(user)
    
    if (user.username == document.getElementById('username').value &&
    user.password == document.getElementById('password').value) {
        console.log("Here")
        localStorage.setItem('logged', true)
        location.href = '/'
    }

}