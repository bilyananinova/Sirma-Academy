function partialSum(a) {
    let sum = a;

    return function (b, c, d) {
        return sum += b + c + d;
    }
}

const addFive = partialSum(5);
console.log(addFive(1, 2, 3));