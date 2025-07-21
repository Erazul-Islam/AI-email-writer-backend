import { Modality } from "@google/genai"
import gemini from "../../utils/gemini"
import AppError from "../../errors/AppError"

type Promt = {
    message: string
}

const imageGenerator = async (payload: Promt) => {
    const response = await gemini.models.generateContent({
        model: 'gemini-2.0-flash-preview-image-generation',
        contents: payload.message,
        config: {
            responseModalities: [Modality.TEXT, Modality.IMAGE]
        }

    })

    let base64Image: string | null = null;
    let textResponse: string | null = null

    const candidates = response?.candidates;

    if (candidates && candidates.length > 0) {
        const parts = candidates[0].content?.parts ?? [];

        for (const part of parts) {
            if ("text" in part && part.text) {
                textResponse = part.text;
            } else if ("inlineData" in part && part.inlineData?.data) {
                base64Image = part.inlineData.data;
            }
        }
    } else {
        throw new AppError(500, "No candidates returned by Gemini API.");
    }

    return { textResponse, base64Image }
}

export const imageService = {
    imageGenerator
}