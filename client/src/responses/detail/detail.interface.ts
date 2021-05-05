import { AuthorResponse } from "../author.interface";
import ItemResponse from "../item.interface";
import { DetailItemResponse } from "./detail-item.interface";

export interface DetailResponse {
    author: AuthorResponse;
    item: DetailItemResponse;
    categories: string[];
}