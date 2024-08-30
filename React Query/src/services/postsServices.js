import axios from 'axios';

export async function getAllPosts() {
    let result = await axios.get('https://dummyjson.com/posts');
    return result.data.posts;
}

export async function getAllUsersPosts(id) {
    let result = await axios.get(`https://dummyjson.com/posts/user/${id}`);
    return result.data.posts;
}

export async function getOnePost(id) {
    let result = await axios.get(`https://dummyjson.com/posts/${id}`);
    return result.data;
}

export async function createPost({ title, body, userId }) {
    let result = await axios.post('https://dummyjson.com/posts/add', {
        title, userId, body
    });
    return result;
}

export async function updatePost(id,  title, body, userId ) {
    let result = await axios.put(`https://dummyjson.com/posts/${id}`, {
        title, body, userId
    });
    return result.data;
}

export async function deletePost(id) {
    let result = await axios.delete(`https://dummyjson.com/posts/${id}`);
    return result;
}