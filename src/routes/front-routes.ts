import { Application, Request, Response } from 'express';
import path from 'path';


const allowedExt = [
    '.js',
    '.ico',
    '.css',
    '.png',
    '.jpg',
    '.JPG',
    'jpeg',
    '.woff2',
    '.woff',
    '.ttf',
    '.svg',
  ];


export class FrontRoutes {

// El node funcionará tanto como API REST, como servidor de estaticos. (Al menos para desarrollo)
    public route(app: Application, _path: string) {
        app.get(`${_path}` , (req: Request, res: Response) => {
            if (allowedExt.filter(ext => req.url.indexOf(ext) > 0).length > 0) {
                res.sendFile(path.join(__dirname, `/../../client/build/${req.url}`));
              } else {
                res.sendFile(path.join(__dirname, '/../../client/build/index.html'));
              }
        });
    }

    

}