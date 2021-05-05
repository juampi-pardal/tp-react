"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Detail {
    constructor(author, item, categories) {
        this.author = author;
        this.item = item;
        this.categories = categories || [];
    }
}
exports.default = Detail;
