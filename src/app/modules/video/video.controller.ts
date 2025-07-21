import catchAsync from "../../utils/catchAsync"
import sendResponse from "../../utils/sendResponse"
import { videoGeneratorService } from "./video.service"

const generateVideoController = catchAsync(async (req, res) => {
    const result = await videoGeneratorService.videoGenerator(req.body)

    sendResponse(res, {
        statusCode: 201,
        success: true,
        message: "Video generated successfully",
        data: result
    })
})


export const videoController = {
    generateVideoController
}