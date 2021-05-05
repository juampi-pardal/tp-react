import ItemResponse from "../item.interface";

export interface DetailItemResponse extends ItemResponse {
    description: string;
    sold_quantity: number;
}