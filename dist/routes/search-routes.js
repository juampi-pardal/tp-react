"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchRoutes = void 0;
class SearchRoutes {
    route(app, prefix) {
        app.get(`${prefix}/items?q=:query`, function (req, res) {
            res.status(200).json({ message: 'probando ruteo search: ' + req.query.q });
        });
    }
}
exports.SearchRoutes = SearchRoutes;
