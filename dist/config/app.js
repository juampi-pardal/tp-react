"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importStar(require("express"));
const routes_1 = require("../routes");
const front_routes_1 = require("../routes/front-routes");
class App {
    constructor() {
        this.app = express_1.default();
        this.config();
        this.registerRoutes();
    }
    config() {
        this.app.use(express_1.json());
    }
    registerRoutes() {
        routes_1.apiRoutes.forEach(route => {
            new route().route(this.app, '/api');
        });
        new front_routes_1.FrontRoutes().route(this.app, '*');
    }
}
exports.default = new App().app;
