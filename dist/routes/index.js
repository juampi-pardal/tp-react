"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiRoutes = void 0;
const detail_routes_1 = require("./detail-routes");
const search_routes_1 = require("./search-routes");
exports.apiRoutes = [search_routes_1.SearchRoutes, detail_routes_1.DetailRoutes];
