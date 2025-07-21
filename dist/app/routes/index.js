"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const email_route_1 = require("../modules/email/email.route");
const image_route_1 = require("../modules/image/image.route");
const video_route_1 = require("../modules/video/video.route");
const router = (0, express_1.Router)();
const moduleRoutes = [
    {
        path: '/email',
        route: email_route_1.emailRoutes
    },
    {
        path: '/image',
        route: image_route_1.imageRoutes
    },
    {
        path: '/video',
        route: video_route_1.videoRoutes
    }
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));
exports.default = router;
