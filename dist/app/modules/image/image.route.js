"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.imageRoutes = void 0;
const express_1 = require("express");
const image_controller_1 = require("./image.controller");
const multer_1 = __importDefault(require("multer"));
const router = (0, express_1.Router)();
const upload = (0, multer_1.default)({ dest: "uploads/" });
router.post('/', image_controller_1.imageController.generateImageController);
router.post('/upload', upload.single("image"), image_controller_1.imageController.generateCaptionFromImageController);
exports.imageRoutes = router;
