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
exports.videoGeneratorService = void 0;
const gemini_1 = __importDefault(require("../../utils/gemini"));
const videoGenerator = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c;
    let operations = yield gemini_1.default.models.generateVideos({
        model: "veo-3.0-generate-preview",
        prompt: payload.message,
        config: {
            personGeneration: 'allow_all',
            aspectRatio: "16 : 9"
        }
    });
    while (!operations.done) {
        yield new Promise((resolve) => setTimeout(resolve, 10000));
        operations = yield gemini_1.default.operations.getVideosOperation({
            operation: operations
        });
    }
    const videoUri = (_c = (_b = (_a = operations.response) === null || _a === void 0 ? void 0 : _a.generatedVideos) === null || _b === void 0 ? void 0 : _b[0].video) === null || _c === void 0 ? void 0 : _c.uri;
    return videoUri;
});
exports.videoGeneratorService = {
    videoGenerator
};
