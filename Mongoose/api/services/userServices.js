let bcrypt = require('bcrypt');
let User = require('../models/User');
let saltRounds = 10;

async function register({ username, email, password }) {
    let hash = await bcrypt.hash(password, saltRounds);
    let user = await User.create({ username, email, password: hash });
    return user;
}

async function login({ username, password }) {
    let user = await User.findOne({ username });

    return bcrypt.compare(password, user.password)
        .then(function (result) {            
            return user;
        });
}

module.exports = { register, login };