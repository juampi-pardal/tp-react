import { Request, Response } from 'express';


// Es necesario sanitizar la url para remplzar caracteres que no soporta la API,
// como por ejemplo tildes, Ñ, y demas.

export const sanitizeQueryParam = (queryParamName: string) => {
    return (req: Request, res: Response, next) => {
        try {
            req.query[queryParamName] = req.query[queryParamName].toString().normalize('NFKD').replace(/[^\w\s.-_\/]/g, '')
        } catch (error) {
            console.error('Error trying to sanitize param ' + req.query[queryParamName], error);   
        }
        finally {
            next();
        }
    }
}
