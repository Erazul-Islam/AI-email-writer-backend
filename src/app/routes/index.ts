import { Router } from "express";
import { emailRoutes } from "../modules/email/email.route";
import { imageRoutes } from "../modules/image/image.route";
import { videoRoutes } from "../modules/video/video.route";

const router = Router()

const moduleRoutes = [
    {
        path: '/email',
        route: emailRoutes
    },
    {
        path : '/image',
        route : imageRoutes
    },
    {
        path : '/video',
        route : videoRoutes
    }
]

moduleRoutes.forEach((route) => router.use(route.path, route.route))

export default router