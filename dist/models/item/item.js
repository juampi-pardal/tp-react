"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Item {
    constructor(id, title, price, picture, condition, freeShipping, address) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.picture = picture;
        this.condition = condition;
        this.free_shipping = freeShipping;
        if (address) {
            this.address = address;
        }
    }
}
exports.default = Item;
