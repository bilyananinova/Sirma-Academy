let mongoose = require('mongoose');

function main() {
  mongoose.connect('mongodb://127.0.0.1:27017/express-react-app');
}

module.exports = main;
