"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DetailRoutes = void 0;
const detail_controller_1 = require("../controllers/detail-controller");
class DetailRoutes {
    constructor() {
        this.detailController = new detail_controller_1.DetailController();
    }
    route(app, prefix) {
        app.get(`${prefix}/items/:id`, (req, res) => {
            this.detailController.getSearchResults(req, res);
        });
    }
}
exports.DetailRoutes = DetailRoutes;
