"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Search {
    constructor(author, items, categories) {
        this.author = author;
        this.items = items;
        this.categories = categories || [];
    }
}
exports.default = Search;
