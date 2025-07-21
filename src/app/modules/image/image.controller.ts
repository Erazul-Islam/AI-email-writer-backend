import catchAsync from "../../utils/catchAsync"
import sendResponse from "../../utils/sendResponse"
import { imageService } from "./image.service"

const generateImageController = catchAsync(async (req, res) => {
    const result = await imageService.imageGenerator(req.body)

    sendResponse(res, {
        statusCode: 201,
        success: true,
        message: "Image generated successfully",
        data: result
    })
})


export const imageController = {
    generateImageController
}