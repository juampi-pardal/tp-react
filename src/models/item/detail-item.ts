import Item from "./item";
import Price from "./price";

export default class DetailItem extends Item {

    readonly sold_quantity: number;
    readonly description: string 

    constructor(id: string, title: string, price: Price, picture: string, condition: string, freeShipping: boolean, address: string, soldQuantity: number, description: string) {
        super(id, title, price, picture, condition, freeShipping, address);
        this.sold_quantity = soldQuantity;
        this.description = description;
    }

}