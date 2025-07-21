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
exports.imageController = void 0;
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const sendResponse_1 = __importDefault(require("../../utils/sendResponse"));
const image_service_1 = require("./image.service");
const fs_1 = __importDefault(require("fs"));
const generateImageController = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield image_service_1.imageService.imageGenerator(req.body);
    (0, sendResponse_1.default)(res, {
        statusCode: 201,
        success: true,
        message: "Image generated successfully",
        data: result
    });
}));
const generateCaptionFromImageController = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (!req.file) {
        return res.status(400).json({ message: "Image file is required" });
    }
    const base64Image = fs_1.default.readFileSync(req.file.path, { encoding: "base64" });
    const result = yield image_service_1.imageService.generateCaptionFromImage(base64Image);
    fs_1.default.unlinkSync(req.file.path);
    (0, sendResponse_1.default)(res, {
        statusCode: 201,
        success: true,
        message: "Caption generated successfully",
        data: result
    });
}));
exports.imageController = {
    generateImageController,
    generateCaptionFromImageController
};
