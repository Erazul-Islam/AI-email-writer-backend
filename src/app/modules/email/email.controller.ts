import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { emailServices } from "./email.service";


const generateEmialController = catchAsync(async(req,res) => {
    const result = await emailServices.geminiEmailgenerate(req.body)

    sendResponse(res,{
        statusCode : 201,
        success : true,
        message : "Email generated successfully",
        data : result
    })
} )


export const emailController = {
    generateEmialController
}