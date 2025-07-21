"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const genai_1 = require("@google/genai");
const config_1 = __importDefault(require("../config"));
const gemini = new genai_1.GoogleGenAI({
    apiKey: config_1.default.geminiAPI
});
exports.default = gemini;
