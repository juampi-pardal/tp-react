import { Application, Request, Response } from 'express';
import { SearchController } from '../controllers/search-controller';
import { sanitizeQueryParam } from '../middlewares/sanitize-qury-param';

export class SearchRoutes {

    private SearchController: SearchController = new SearchController();

    public route(app: Application, prefix: string) {
        app.get(`${prefix}/items`,sanitizeQueryParam('q') , (req: Request, res: Response) => {
            this.SearchController.getSearchResults(req, res);
        });
    }

    

}