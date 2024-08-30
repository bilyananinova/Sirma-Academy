import axios from 'axios';

export async function login(username, password) {

    let result = await axios.post('https://dummyjson.com/user/login', {
        username,
        password,
    })

    return result.data;
}

export async function register(username, password, firstName, lastName) {

    let result = await axios.post('https://dummyjson.com/user/add', {
        username,
        password,
        firstName,
        lastName
    })

    return result.data;
}