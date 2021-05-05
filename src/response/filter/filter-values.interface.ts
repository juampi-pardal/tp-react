import PathResponse from "./path.interface";

export default interface FilterValueResponse {
    id: string;
    name: string;
    results: number;
    path_from_root: PathResponse[]
}