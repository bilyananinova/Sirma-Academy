let Post = require('../models/Post');

async function getPosts() {
    return await Post.find();
}

async function getOne(id) {
    return await Post.findById(id);
}

async function create({ title, content, image, author }) {
    return await Post.create({ title, content, image, author });
}

async function update({ title, content, image }, id) {
    return await Post.findByIdAndUpdate(id, { title, content, image });
}

async function deleteOne(id) {
    return await Post.findByIdAndDelete(id);
}

module.exports = { getPosts, getOne, create, update, deleteOne };