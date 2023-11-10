 class itbooks {
    constructor(title, Author, pages) {
        this._title = title;
        this._Author = Author;
        this._pages = pages;
    }

    get title() {
        return this._title;
    }

    get Author() {
        return this._Author;
    }

    get pages() {
        return this._pages;
    }
}

const comptia1 = new itbooks("comptia itf+", "James Pengelly", "550");
const comptia2 = new itbooks("comptia core 1 and 2", "james pengelly", "890");
const book3 = new itbooks("coding for nerds", "n/a", "500");

export default { comptia1, comptia2, book3 };
