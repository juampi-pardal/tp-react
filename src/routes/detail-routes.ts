import { Application, Request, Response } from 'express';
import { DetailController } from '../controllers/detail-controller';

export class DetailRoutes {

    private detailController: DetailController = new DetailController();

    public route(app: Application, prefix: string) {

        app.get(`${prefix}/items/:id`, (req: Request, res: Response) => {
            this.detailController.getSearchResults(req, res);
        });

    }

}