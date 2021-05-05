"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const detail_item_1 = __importDefault(require("../../models/item/detail-item"));
const detail_1 = __importDefault(require("../../models/detail"));
const author_1 = __importDefault(require("../../models/author"));
const search_service_deserializer_1 = __importDefault(require("./search-service.deserializer"));
class DetailServiceDeserializer {
    static deserializeItemDetail(itemReponse, descriptionResponse, categories) {
        return new detail_1.default(new author_1.default('Juan Pablo', 'Pardal'), new detail_item_1.default(itemReponse.id, itemReponse.title, search_service_deserializer_1.default.deserializePrices(itemReponse.price, itemReponse.currency_id), itemReponse.pictures[0].url, itemReponse.condition, itemReponse.shipping.free_shipping, null, itemReponse.sold_quantity, descriptionResponse), categories);
    }
    static buildDetailBreadcrumb(response) {
        return response ? response.map(path => path.name) : [];
    }
}
exports.default = DetailServiceDeserializer;
