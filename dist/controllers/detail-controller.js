"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DetailController = void 0;
const meli_services_1 = __importDefault(require("../services/meli-services"));
const response_service_1 = require("../services/response-service");
const detail_service_deserializer_1 = __importDefault(require("../utils/deserializers/detail-service.deserializer"));
class DetailController {
    constructor() {
        this.meliService = new meli_services_1.default();
    }
    getSearchResults(req, res) {
        if (req.params.id) {
            this.meliService.getItemDetail(req.params.id)
                .then((responses) => __awaiter(this, void 0, void 0, function* () {
                const itemResponse = responses[0].data;
                const descriptionResponse = responses[1].data;
                const categories = yield this.getCategory(itemResponse.category_id);
                const detail = detail_service_deserializer_1.default.deserializeItemDetail(itemResponse, descriptionResponse.plain_text, categories);
                response_service_1.successResponse(detail, res);
            }))
                .catch(err => {
                response_service_1.failureResponse('Something bad happened', err, res);
            });
        }
        else {
            response_service_1.failureResponse('Param id is missing', {}, res);
        }
    }
    getCategory(categoryId) {
        return __awaiter(this, void 0, void 0, function* () {
            const categoryResponse = yield this.meliService.getCategoryById(categoryId);
            return categoryResponse ? detail_service_deserializer_1.default.buildDetailBreadcrumb(categoryResponse.data.path_from_root) : [];
        });
    }
}
exports.DetailController = DetailController;
