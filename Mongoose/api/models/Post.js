let mongoose = require('mongoose');

let postSchema = new mongoose.Schema({
    title: String,
    content: String,
    image: String,
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        require: true
    }
});

module.exports = mongoose.model('Post', postSchema);