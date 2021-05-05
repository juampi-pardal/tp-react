"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DetailRoutes = void 0;
class DetailRoutes {
    route(app, prefix) {
        app.get(`${prefix}/items/:id`, function (req, res) {
            res.status(200).json({ message: 'probando ruteo detail ' + req.params.id });
        });
    }
}
exports.DetailRoutes = DetailRoutes;
