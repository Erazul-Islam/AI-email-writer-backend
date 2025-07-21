import { Router } from "express";
import { videoController } from "./video.controller";

const router = Router()

router.post('/',videoController.generateVideoController)

export const videoRoutes = router