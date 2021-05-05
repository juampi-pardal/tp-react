import { Request, Response } from 'express';
import Detail from '../models/detail';
import Search from '../models/search';
import { DetailDescriptionResponse } from '../response/detail/description.interface';
import { ResultResponse } from '../response/result.interface';
import MeliService from "../services/meli-services";
import { failureResponse, successResponse } from '../services/response-service';
import DetailServiceDeserializer from '../utils/deserializers/detail-service.deserializer';
import SearchServiceDeserializer from '../utils/deserializers/search-service.deserializer';

export class DetailController {
    
    private meliService: MeliService = new MeliService();

    public getSearchResults(req: Request, res: Response) {
        if (req.params.id) {
            this.meliService.getItemDetail(req.params.id)
            .then(async responses => {
                const itemResponse: ResultResponse = responses[0].data;
                const descriptionResponse: DetailDescriptionResponse = responses[1].data;
                const categories = await this.getCategory(itemResponse.category_id);
                const detail: Detail = DetailServiceDeserializer.deserializeItemDetail(itemResponse, descriptionResponse.plain_text, categories);
                successResponse<Detail>(detail, res);
            })
            .catch(err => {
                failureResponse('Something bad happened', err, res);
            })
        }
        else {
            failureResponse('Param id is missing', {}, res);
        }
    }
    private async getCategory(categoryId: string): Promise<string[]> {
        const categoryResponse = await this.meliService.getCategoryById(categoryId);
        return categoryResponse ? DetailServiceDeserializer.buildDetailBreadcrumb(categoryResponse.data.path_from_root) : [];
    }
}