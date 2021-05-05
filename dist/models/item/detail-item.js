"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const item_1 = __importDefault(require("./item"));
class DetailItem extends item_1.default {
    constructor(id, title, price, picture, condition, freeShipping, address, soldQuantity, description) {
        super(id, title, price, picture, condition, freeShipping, address);
        this.sold_quantity = soldQuantity;
        this.description = description;
    }
}
exports.default = DetailItem;
