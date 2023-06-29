let user = localStorage.getItem('user')
const param = new URLSearchParams(location.search)


console.log('here');
if (user !== null) {
    user = JSON.parse(user)


    document.getElementById('name').value = user.firstname + " " + user.lastname;
    document.getElementById('email').value = user.email;
    document.getElementById('phone').value = user.phone;
}

if (param.get('total') && param.get('items')) {
    document.getElementById('amount').value = param.get('total');
    document.getElementById('items').value = param.get('items');
} else {
    location.href = "/"
}