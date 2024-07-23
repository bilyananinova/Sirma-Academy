function multiply(a) {
    return a * 5;
}

let multiplyByFive = multiply.bind(null, 3);

console.log(multiplyByFive(3));