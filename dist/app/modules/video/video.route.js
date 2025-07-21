"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.videoRoutes = void 0;
const express_1 = require("express");
const video_controller_1 = require("./video.controller");
const router = (0, express_1.Router)();
router.post('/', video_controller_1.videoController.generateVideoController);
exports.videoRoutes = router;
