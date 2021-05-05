import Price from "./price";

export default class Item {

    readonly id: string;
    readonly title: string;
    readonly price: Price;
    readonly picture: string;
    readonly condition: string;
    readonly free_shipping: boolean;
    readonly address: string;

    constructor(id: string, title: string, price: Price, picture: string, condition: string, freeShipping: boolean, address: string) {
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