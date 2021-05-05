import PriceResponse from "./search/price.interface";

export default interface ItemResponse {
    id: string;
    title: string;
    price: PriceResponse;
    picture: string;
    condition: string;
    free_shipping: boolean;
    address: string;
}