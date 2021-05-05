"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FrontRoutes = void 0;
const path_1 = __importDefault(require("path"));
const allowedExt = [
    '.js',
    '.ico',
    '.css',
    '.png',
    '.jpg',
    '.JPG',
    'jpeg',
    '.woff2',
    '.woff',
    '.ttf',
    '.svg',
];
class FrontRoutes {
    // El node funcionará tanto como API REST, como servidor de estaticos. (Al menos para desarrollo)
    route(app, _path) {
        app.get(`${_path}`, (req, res) => {
            if (allowedExt.filter(ext => req.url.indexOf(ext) > 0).length > 0) {
                res.sendFile(path_1.default.join(__dirname, '..', '..', `client/build/${req.url}`));
            }
            else {
                res.sendFile(path_1.default.join(__dirname, '..', '..', 'client/build/index.html'));
            }
        });
    }
}
exports.FrontRoutes = FrontRoutes;
