import { Router } from "express";
import { imageController } from "./image.controller";
// import multer from 'multer'


const router = Router()
// const upload = multer({ dest: "uploads/" });

router.post('/',imageController.generateImageController)
// router.post('/upload',upload.single("image"),imageController.generateCaptionFromImageController)

export const imageRoutes = router