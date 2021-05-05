import SearchProduct from "../search/search-product";

export default class DetailProductModel extends SearchProduct {

    readonly soldQuantity: number;
    readonly description: string;

    constructor(id: string, title: string, price: number, picture: string, condition: string, freeShipping: boolean, address: string, soldQuantity: number, description: string) {
        super(id, title, price, picture, condition, freeShipping, address);
        this.soldQuantity = soldQuantity;
        this.description = description;
    }
}