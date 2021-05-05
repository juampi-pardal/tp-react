export default class SearchProduct {
    readonly id: string;
    readonly title: string;
    readonly price: number;
    readonly picture: string;
    readonly condition: string;
    readonly freeShipping: boolean;
    readonly address: string;

    constructor(id: string, title: string, price: number, picture: string, condition: string, freeShipping: boolean, address: string) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.picture = picture;
        this.condition = condition;
        this.freeShipping = freeShipping;
        this.address = address
    }

    get isNew() {
        return this.condition.toLowerCase() === 'new';
    }


    get isUsed() {
        return this.condition.toLowerCase() === 'used';
    }
}