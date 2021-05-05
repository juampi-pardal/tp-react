import express, {  Application, json } from 'express';
import { apiRoutes } from '../routes';
import { FrontRoutes } from '../routes/front-routes';


class App {

    public app: Application;

    constructor() {
        this.app = express();
        this.config();
        this.registerRoutes();
    }

    private config(): void {
        this.app.use(json());
    }

    private registerRoutes(): void {
        
        apiRoutes.forEach(route => {
            new route().route(this.app, '/api');
        })
        new FrontRoutes().route(this.app, '*');
    }
    
}

export default new App().app;