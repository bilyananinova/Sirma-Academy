let double = (num) => {
    return num * 2;
}

let square = (num) => {
    return num * num;
}

let compose = (f1, f2) => (x) => {
    return f2(f1(x));
}

const doubleThenSquare = compose(double, square);

console.log(doubleThenSquare(3)); // Output: 36