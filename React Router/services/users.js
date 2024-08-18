function login(username, password) {
    return fetch('https://dummyjson.com/user/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            username,
            password,
            expiresInMins: 30, // optional, defaults to 60
        })
    })
        .then(res => res.json())
        .then(result => {
            return result
        })
        .catch((err) => {
            console.log(err);
        })
}

function register(username, email, phone, password) {
    return fetch('https://dummyjson.com/users/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            username,
            email,
            phone,
            password
        })
    })
        .then(res => res.json())
        .then(result => {
            return result
        })
        .catch((err) => {
            console.log(err);
        })
}

function getUserCart(id) {
    return fetch(`https://dummyjson.com/carts/user/${id}`)
        .then(res => {
            return res.json();
        })
        .then(result => {
            return result
        })
        .catch((err) => {
            console.log(err);
        })
}

function getUser(id) {
    return fetch(`https://dummyjson.com/users/${id}`)
        .then(res => {
            return res.json();
        })
        .then(result => {
            return result
        })
        .catch((err) => {
            console.log(err);
        })
}

function updateUser(id, username, phone, email, address) {
    return fetch(`https://dummyjson.com/users/${id}`, {
        method: 'PUT', /* or PATCH */
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            username,
            phone,
            email,
            address
        })
    })
        .then(res => {        
            return res.json();
        })
        .then(result => {
            return result
        })
        .catch((err) => {
            console.log(err);
        })
}

export { login, register, getUserCart, getUser, updateUser }