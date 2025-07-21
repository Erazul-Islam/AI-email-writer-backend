import { Router } from "express";
import { emailController } from "./email.controller";

const router = Router()

router.post('/',emailController.generateEmialController)

export const emailRoutes = router