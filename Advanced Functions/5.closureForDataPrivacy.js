
function createPrivateCounter() {
    let n = 0;

    return {
        increment() {
            return n++;
        },

        getCount() {
            return n;
        }
    }
}

const counter = createPrivateCounter();
counter.increment();
console.log(counter.getCount()); // Output: 1

counter.increment()
counter.increment()
counter.increment()
counter.increment()
counter.increment()
console.log(counter.getCount())