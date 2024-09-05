let express = require('express');
let { register, login } = require('../services/userServices.js');
let { create, getPosts, getOne, update, deleteOne } = require('../services/postServices.js');

let router = express.Router();

router.post('/register', async (req, res) => {
    let user = await register(req.body);
    res.json(user);
});

router.post('/login', async (req, res) => {
    let user = await login(req.body);
    res.json(user);
});

router.put('/blog/:id/edit', async (req, res) => {
    let post = await update(req.body, req.params.id);
    res.json(post);
});

router.delete('/blog/:id/delete', async (req, res) => {
    let post = await deleteOne(req.params.id);
    res.json(post);
});

router.get('/blog/:id', async (req, res) => {
    let post = await getOne(req.params.id);
    res.json(post);
});

router.get('/blog', async (req, res) => {
    let posts = await getPosts();
    res.json(posts);
});

router.post('/create-post', async (req, res) => {
    let post = await create(req.body);
    res.json(post);
});



module.exports = router;