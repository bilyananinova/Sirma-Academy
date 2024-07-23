function Person(name) {
    this.name = name;
    return new Employee.call({}, name);
}

function Employee(name, job) {
    this.name = name;
    this.job = job;
}

const emp = new Employee('Alice', 'Engineer');
console.log(emp); // Output: Employee { name: 'Alice', job: 'Engineer' }
