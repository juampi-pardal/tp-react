"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchRoutes = void 0;
const search_controller_1 = require("../controllers/search-controller");
const sanitize_qury_param_1 = require("../middlewares/sanitize-qury-param");
class SearchRoutes {
    constructor() {
        this.SearchController = new search_controller_1.SearchController();
    }
    route(app, prefix) {
        app.get(`${prefix}/items`, sanitize_qury_param_1.sanitizeQueryParam('q'), (req, res) => {
            this.SearchController.getSearchResults(req, res);
        });
    }
}
exports.SearchRoutes = SearchRoutes;
