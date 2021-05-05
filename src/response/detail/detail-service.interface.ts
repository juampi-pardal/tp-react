import { ResultResponse } from "../result.interface";
import { DetailDescriptionResponse } from "./description.interface";
import { CategoryResponse } from './category.interface';

export interface DetailServiceResponse {
    data: ResultResponse;
}

export interface DetailDescriptionServiceResponse {
    data: DetailDescriptionResponse;
}

export interface DetailCategoryServiceResponse {
    data: CategoryResponse;
}