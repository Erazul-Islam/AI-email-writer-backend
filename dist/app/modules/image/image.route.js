"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.imageRoutes = void 0;
const express_1 = require("express");
const image_controller_1 = require("./image.controller");
// import multer from 'multer'
const router = (0, express_1.Router)();
// const upload = multer({ dest: "uploads/" });
router.post('/', image_controller_1.imageController.generateImageController);
// router.post('/upload',upload.single("image"),imageController.generateCaptionFromImageController)
exports.imageRoutes = router;
