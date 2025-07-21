"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const email_route_1 = require("../modules/email/email.route");
const router = (0, express_1.Router)();
const moduleRoutes = [
    {
        path: '/email',
        route: email_route_1.emailRoutes
    }
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));
exports.default = router;
