import FilterValueResponse from "./filter-values.interface";

export default interface FilterResponse {
    id: string;
    name: string;
    type: string;
    values: FilterValueResponse[]
}