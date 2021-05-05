import { AuthorResponse } from "../author.interface";
import ItemResponse from "../item.interface";

export interface SearchResponse {
    author: AuthorResponse;
    items: ItemResponse[];
    categories: string[];
}