class LibraryItem {
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }
}

class Book extends LibraryItem {
    constructor(genres, published, title, author) {
        super(title, author)
        this.genres = genres;
        this.published = published;
    }

    print() {
        console.log(`${this.title} is a ${this.genres} by writer ${this.author}. First publication date ${this.published}.`);
    }
}

class Magazine extends LibraryItem {
    constructor(pages, genres, published, title) {
        super(title)
        this.genres = genres;
        this.pages = pages;
        this.published = published;
    }

    print() {
        console.log(`${this.title} is a ${this.genres} magazine with ${this.pages}. Publication frequency ${this.published}.`);
    }
}

let book = new Book('horror', 1983, 'Pet Sematary', 'Stephen King');
book.print();

let magazine = new Magazine(121, 'fashion', 'weekly', 'Elle');
magazine.print();