import axios from 'axios';
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

export async function register(username, email, password) {
    let result = await axios.post(`http://localhost:3000/register`, {
        username,
        email,
        password
    });

    return result.data
}


export async function login(username, password) {
    let result = await axios.post(`http://localhost:3000/login`, {
        username,
        password
    });

    return result.data
}