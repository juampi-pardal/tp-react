import axios from 'axios';
import { DetailServiceResponse } from '../response/detail/detail-service.interface';
import { SearchServiceInterface } from '../response/search/search-service.interface';


export default class MeliService {

    private static instance: MeliService;

    static API_URL = 'https://api.mercadolibre.com';

    constructor() {
        if (MeliService.instance) {
            return MeliService.instance;
        }
        MeliService.instance = this;
    }

    public searchItems(query: string): Promise<SearchServiceInterface> {
        return axios.get(`${MeliService.API_URL}/sites/MLA/search?q=:${query}`);
    }

    public getItemDetail(id: string): Promise<any> {
        const productDetail = `${MeliService.API_URL}/items/${id}`;
        const productDetailDescription = `${MeliService.API_URL}/items/${id}/description`;
        return axios.all([axios.get(productDetail), axios.get(productDetailDescription)]);
    }

    public getCategoryById(categoryId: string): Promise<DetailCategoryServiceResponse> {
        return axios.get(`${MeliService.API_URL}/categories/${categoryId}`)
    }
    
}