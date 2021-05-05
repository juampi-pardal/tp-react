"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
class MeliService {
    constructor() {
        if (MeliService.instance) {
            return MeliService.instance;
        }
        MeliService.instance = this;
    }
    searchItems(query) {
        return axios_1.default.get(`${MeliService.API_URL}/sites/MLA/search?q=:${query}`);
    }
    getItemDetail(id) {
        const productDetail = `${MeliService.API_URL}/items/${id}`;
        const productDetailDescription = `${MeliService.API_URL}/items/${id}/description`;
        return axios_1.default.all([axios_1.default.get(productDetail), axios_1.default.get(productDetailDescription)]);
    }
    getCategoryById(categoryId) {
        return axios_1.default.get(`${MeliService.API_URL}/categories/${categoryId}`);
    }
}
exports.default = MeliService;
MeliService.API_URL = 'https://api.mercadolibre.com';
