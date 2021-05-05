import { AddressResponse } from "./address.interface";
import { PictureResponse } from "./picture.interface";
import { PriceResponse } from "./prices/prices.interface";
import { ShippingResponse } from "./shipping.interface";

export interface ResultResponse {
    id: string;
    title: string;
    price: number;
    prices: PriceResponse;
    thumbnail: string;
    address: AddressResponse;
    seller_address: any;
    sold_quantity: number;
    condition: string;
    shipping: ShippingResponse;
    pictures: PictureResponse[];
    currency_id: string;
    category_id: string;
}