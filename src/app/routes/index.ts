import { Router } from "express";
import { emailRoutes } from "../modules/email/email.route";

const router = Router()

const moduleRoutes = [
    {
        path: '/email',
        route: emailRoutes
    }
]

moduleRoutes.forEach((route) => router.use(route.path, route.route))

export default router