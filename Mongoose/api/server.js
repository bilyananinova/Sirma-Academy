let express = require('express');
let cors = require('cors');

let router = require('./routes/router.js');
let db = require('./config/db.js')

let app = express();
let port = 3000;
let corsOptions = {
    origin: ["http://localhost:5173"]
};

db(app)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors(corsOptions));
app.use(router)

app.listen(port, () => {
    console.log(`Server is listening on ${port}...`);
});