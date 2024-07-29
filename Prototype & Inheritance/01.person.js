function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;

    this.fullName = function () {
        return `${this.firstName} ${this.lastName}`;
    };
}


let person = new Person('Pesho', 'Ivanov');
console.log(person);
person.firstName = 'Ivan';
console.log(person);
person.lastName = 'Dimitrov';
console.log(person);
console.log(person.fullName());

