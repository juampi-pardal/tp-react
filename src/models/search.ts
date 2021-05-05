import Author from "./author";
import Item from "./item/item";

export default class Search {
    readonly author: Author;
    readonly items: Item[];
    readonly categories: string[];

    constructor(author: Author, items: Item[], categories: string[]) {
        this.author = author;
        this.items = items;
        this.categories = categories || []
    }
}