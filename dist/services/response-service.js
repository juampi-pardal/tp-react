"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.failureResponse = exports.successResponse = void 0;
function successResponse(DATA, res) {
    res.status(200).json(DATA);
}
exports.successResponse = successResponse;
function failureResponse(message, DATA, res) {
    res.status(400).json({
        MESSAGE: message,
        DATA
    });
}
exports.failureResponse = failureResponse;
