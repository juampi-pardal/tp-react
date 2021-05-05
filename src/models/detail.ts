import Author from "./author";
import DetailItem from "./item/detail-item";

export default class Detail {
    readonly author: Author;
    readonly item: DetailItem;
    readonly categories: string[]

    constructor(author: Author, item: DetailItem, categories: string[]) {
        this.author = author;
        this.item = item;
        this.categories = categories || [];
    }
}