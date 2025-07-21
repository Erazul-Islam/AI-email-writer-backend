import AppError from "../../errors/AppError"
import { openAi } from "../../utils/openai"

type Message = {
    message: string
}


const openAIemailgenerate = async (payload: Message) => {
    if (!openAi.apiKey) {
        throw new AppError(500, "API key is required")
    }

    const response = await openAi.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: [{
            role: 'assistant',
            content: `Write an email based on ${payload}`
        }]
    })

    return response.choices[0].message.content
}

export const emailServices = {
    openAIemailgenerate
}