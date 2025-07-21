import OpenAI from "openai";
import config from "../config";


export const openAi = new OpenAI({
    apiKey : config.openAPI
})