let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let double = [2, 3, 4, 4, 5, 6, 6];

Array.prototype.first = function () {
    return this[0];
}

Array.prototype.skip = function (n) {
    return this.slice(n + 1);
}

Array.prototype.take = function (n) {
    return this.slice(0, n + 1);
}

Array.prototype.product = function () {
    return this.reduce((acc, cur) => acc * cur, 1);
}

Array.prototype.unique = function () {
    let temp = [...new Set(this)];
    return temp;
}

console.log(arr.first());
console.log(arr.skip(3));
console.log(arr.take(3));
console.log(arr.product());
console.log(double.unique());