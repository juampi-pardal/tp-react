"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sanitizeQueryParam = void 0;
// Es necesario sanitizar la url para remplzar caracteres que no soporta la API,
// como por ejemplo tildes, Ñ, y demas.
const sanitizeQueryParam = (queryParamName) => {
    return (req, res, next) => {
        try {
            req.query[queryParamName] = req.query[queryParamName].toString().normalize('NFKD').replace(/[^\w\s.-_\/]/g, '');
        }
        catch (error) {
            console.error('Error trying to sanitize param ' + req.query[queryParamName], error);
        }
        finally {
            next();
        }
    };
};
exports.sanitizeQueryParam = sanitizeQueryParam;
