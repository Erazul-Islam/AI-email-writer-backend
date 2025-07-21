"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.openAi = void 0;
const openai_1 = __importDefault(require("openai"));
const config_1 = __importDefault(require("../config"));
exports.openAi = new openai_1.default({
    apiKey: config_1.default.openAPI
});
