import { Request, Response } from 'express';
import Search from '../models/search';
import MeliService from "../services/meli-services";
import { failureResponse, successResponse } from '../services/response-service';
import SearchServiceDeserializer from '../utils/deserializers/search-service.deserializer';

export class SearchController {
    
    private meliService: MeliService = new MeliService();

    public getSearchResults(req: Request, res: Response) {
        if (req.query.q) {
            this.meliService.searchItems(req.query.q.toString())
            .then(response => {
                const search: Search = SearchServiceDeserializer.deserializeSearchResponse(response.data);
                successResponse<Search>(search, res);
            })
            .catch(err => {
                failureResponse('Something bad happened', err, res);
            })
        }
        else {
            failureResponse('QueryParam q is missing', {}, res);
        }
    }

}