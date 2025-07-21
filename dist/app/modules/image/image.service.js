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
exports.imageService = void 0;
const genai_1 = require("@google/genai");
const gemini_1 = __importDefault(require("../../utils/gemini"));
const AppError_1 = __importDefault(require("../../errors/AppError"));
const imageGenerator = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c;
    const response = yield gemini_1.default.models.generateContent({
        model: 'gemini-2.0-flash-preview-image-generation',
        contents: payload.message,
        config: {
            responseModalities: [genai_1.Modality.TEXT, genai_1.Modality.IMAGE]
        }
    });
    let base64Image = null;
    let textResponse = null;
    const candidates = response === null || response === void 0 ? void 0 : response.candidates;
    if (candidates && candidates.length > 0) {
        const parts = (_b = (_a = candidates[0].content) === null || _a === void 0 ? void 0 : _a.parts) !== null && _b !== void 0 ? _b : [];
        for (const part of parts) {
            if ("text" in part && part.text) {
                textResponse = part.text;
            }
            else if ("inlineData" in part && ((_c = part.inlineData) === null || _c === void 0 ? void 0 : _c.data)) {
                base64Image = part.inlineData.data;
            }
        }
    }
    else {
        throw new AppError_1.default(500, "No candidates returned by Gemini API.");
    }
    return { textResponse, base64Image };
});
exports.imageService = {
    imageGenerator
};
