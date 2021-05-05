import FilterResponse from "../filter/filter.interface";
import { ResultResponse } from "../result.interface";

export interface SearchResponse {
    results: ResultResponse[];   
    filters: FilterResponse[];
    available_filters: FilterResponse[];
}