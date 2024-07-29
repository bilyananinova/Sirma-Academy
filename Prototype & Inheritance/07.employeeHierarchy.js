class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }
}

class Manager extends Employee {
    //bonus is 20% of basic salary

    calculateBonuses() {
        return this.salary * 0.20;
    }
}

class Engineer extends Employee {
    //bonus is 10% of basic salary

    calculateBonuses() {
        return this.salary * 0.10;
    }
}

let manager = new Manager('Peter', 10000);
console.log(manager.calculateBonuses());

let engineer = new Engineer('Ivan', 5000);
console.log(engineer.calculateBonuses());