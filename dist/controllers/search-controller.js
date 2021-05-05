"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchController = void 0;
const meli_services_1 = __importDefault(require("../services/meli-services"));
const response_service_1 = require("../services/response-service");
const search_service_deserializer_1 = __importDefault(require("../utils/deserializers/search-service.deserializer"));
class SearchController {
    constructor() {
        this.meliService = new meli_services_1.default();
    }
    getSearchResults(req, res) {
        if (req.query.q) {
            this.meliService.searchItems(req.query.q.toString())
                .then(response => {
                const search = search_service_deserializer_1.default.deserializeSearchResponse(response.data);
                response_service_1.successResponse(search, res);
            })
                .catch(err => {
                response_service_1.failureResponse('Something bad happened', err, res);
            });
        }
        else {
            response_service_1.failureResponse('QueryParam q is missing', {}, res);
        }
    }
}
exports.SearchController = SearchController;
