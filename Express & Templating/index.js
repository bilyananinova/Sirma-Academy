let express = require('express');
let handlebars = require('express-handlebars');

let port = 3000;
let app = express();

app.engine('hbs', handlebars.engine({
    extname: 'hbs',
}));
app.set('view engine', 'hbs');
app.use(express.static('public'));

let movies = [
    {
        title: 'Captain Marvel',
        image: '/img/marvel.jpg',
        description: 'Carol Danvers becomes one of the universe\'s most powerful heroes when Earth is caught in the middle of a galactic war between two alien races.',
        id: 1,
    },

    {
        title: 'The Mandalorian',
        image: '/img/mandalorian.jpg',
        description: 'The travels of a lone bounty hunter in the outer reaches of the galaxy, far from the authority of the New Republic.',
        id: 2,
    },

    {
        title: 'Jurassic World',
        image: '/img/jurassicWorld.jpg',
        description: 'Four years after the destruction of Isla Nublar, Biosyn operatives attempt to track down Maisie Lockwood, while Dr Ellie Sattler investigates a genetically engineered swarm of giant insects.',
        id: 3,
    },
]

app.get('/', (req, res) => {
    res.render('home', { movies: movies });
})

app.get('/about', (req, res) => {
    res.render('about');
})

app.get('/contacts', (req, res) => {
    res.render('contacts');
})

app.get('/:id', (req, res) => {
    let id = req.url.split('')[1];
    let movie = movies.find(movie => movie.id == id);

    res.render('details', movie)
})



app.listen(port, () => {
    console.log(`Server is listening on port ${port}...`);
});
