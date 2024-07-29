class Species {};

function Animal(Class, species) {
    this.species = species;
    Class.prototype.species = species
    Class.prototype.toSpeciesString = function () {
        return `I am a ${this.species}.`
    }
}

let animal = new Animal(Species, 'Human');
console.log(animal.species);
let species = new Species()
console.log(species.toSpeciesString());