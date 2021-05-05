"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Price {
    constructor(currency, amount, decimal) {
        this.currency = currency;
        this.amount = amount;
        this.decimals = decimal;
    }
}
exports.default = Price;
