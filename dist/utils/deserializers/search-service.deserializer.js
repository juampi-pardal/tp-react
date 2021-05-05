"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const author_1 = __importDefault(require("../../models/author"));
const item_1 = __importDefault(require("../../models/item/item"));
const price_1 = __importDefault(require("../../models/item/price"));
const search_1 = __importDefault(require("../../models/search"));
class SearchServiceDeserializer {
    static deserializeSearchResponse(response) {
        return new search_1.default(new author_1.default('Juan Pablo', 'Pardal'), response.results.map(result => this.deserializeItemResponse(result)), this.buildBreadcrumb(response.filters, response.available_filters));
    }
    static deserializeItemResponse(response) {
        var _a, _b, _c;
        return new item_1.default(response.id, response.title, this.deserializePrices(response.price, (_b = (_a = response.prices) === null || _a === void 0 ? void 0 : _a.presentation) === null || _b === void 0 ? void 0 : _b.display_currency), response.thumbnail, response.condition, response.shipping.free_shipping, (_c = response.address) === null || _c === void 0 ? void 0 : _c.state_name);
    }
    static deserializePrices(amount, currency) {
        return new price_1.default(currency, amount, 0);
    }
    static buildBreadcrumb(filtersResponse, availableFilters) {
        var _a, _b;
        if (filtersResponse.length === 0) {
            const categoryAvailableFilter = availableFilters.find(f => f.id === 'category');
            const maxResultFilter = categoryAvailableFilter.values.reduce(function (prev, current) {
                return (prev.results > current.results) ? prev : current;
            });
            return ((_a = maxResultFilter.path_from_root) === null || _a === void 0 ? void 0 : _a.map(path => path.name)) || [maxResultFilter.name];
        }
        const categoryFilter = filtersResponse.find(f => f.id === 'category');
        return ((_b = categoryFilter === null || categoryFilter === void 0 ? void 0 : categoryFilter.values[0].path_from_root) === null || _b === void 0 ? void 0 : _b.map(path => path.name)) || [];
    }
}
exports.default = SearchServiceDeserializer;
