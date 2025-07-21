"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.imageRoutes = void 0;
const express_1 = require("express");
const image_controller_1 = require("./image.controller");
const router = (0, express_1.Router)();
router.post('/', image_controller_1.imageController.generateImageController);
exports.imageRoutes = router;
