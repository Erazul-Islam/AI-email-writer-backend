"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.emailRoutes = void 0;
const express_1 = require("express");
const email_controller_1 = require("./email.controller");
const router = (0, express_1.Router)();
router.post('/', email_controller_1.emailController.generateEmialController);
exports.emailRoutes = router;
