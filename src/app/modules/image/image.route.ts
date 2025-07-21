import { Router } from "express";
import { imageController } from "./image.controller";


const router = Router()

router.post('/',imageController.generateImageController)

export const imageRoutes = router