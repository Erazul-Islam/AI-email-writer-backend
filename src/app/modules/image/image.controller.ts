import catchAsync from "../../utils/catchAsync"
import sendResponse from "../../utils/sendResponse"
import { imageService } from "./image.service"
import fs from 'fs'

const generateImageController = catchAsync(async (req, res) => {
    const result = await imageService.imageGenerator(req.body)

    sendResponse(res, {
        statusCode: 201,
        success: true,
        message: "Image generated successfully",
        data: result
    })
})
const generateCaptionFromImageController = catchAsync(async (req, res) => {

    if (!req.file) {
        return res.status(400).json({ message: "Image file is required" });
    }

    const base64Image = fs.readFileSync(req.file.path, { encoding: "base64" })

    const result = await imageService.generateCaptionFromImage(base64Image)

    fs.unlinkSync(req.file.path)


    sendResponse(res, {
        statusCode: 201,
        success: true,
        message: "Caption generated successfully",
        data: result
    })
})





export const imageController = {
    generateImageController,
    generateCaptionFromImageController
}
