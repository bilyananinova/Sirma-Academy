let obj = {
    word: '',

    setValue(text) {
        this.word = text;
        return this;
    },
    toUpperCase() {
        this.word = this.word.toUpperCase();
        return this;
    },
    toLowerCase() {
        this.word = this.word.toLowerCase();
        return this;
    },
    print() {
        console.log(this.word);
        return this;
    }
}

obj.setValue('Hello')
    .toUpperCase()
    .print()
    .toLowerCase()
    .print();