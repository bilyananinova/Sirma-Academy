import axios from 'axios';

export async function getPosts() {
    let result = await axios.get(`http://localhost:3000/blog`);
    return result.data;
}

export async function getOne(id) {
    let result = await axios.get(`http://localhost:3000/blog/${id}`);
    return result.data;
}

export async function create({ title, content, image, author }) {
    let result = await axios.post(`http://localhost:3000/create-post`, {
        title,
        content,
        image,
        author
    });

    return result.data;
}

export async function update(id, { title, content, image }) {
    let result = await axios.put(`http://localhost:3000/blog/${id}/edit`, {
        title,
        content,
        image
    });

    return result.data;
}

export async function deleteOne(id) {
    let result = await axios.delete(`http://localhost:3000/blog/${id}/delete`);
    return result.data;
}