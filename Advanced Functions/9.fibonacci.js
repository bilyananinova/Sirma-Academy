function getFibonacci() {
   let a = 0;
   let b = 1; 

    return function () {
        let sum = a + b;
        a = b;
        b = sum;
        return sum;
    }
}

let fibonacci = getFibonacci();
console.log(fibonacci()); // 1
console.log(fibonacci()); // 1
console.log(fibonacci()); // 2
console.log(fibonacci()); // 3
console.log(fibonacci()); // 5
console.log(fibonacci()); // 8
console.log(fibonacci()); // 13
console.log(fibonacci()); // 21