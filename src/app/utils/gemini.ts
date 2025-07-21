import { GoogleGenAI } from "@google/genai";
import config from "../config";

const gemini = new GoogleGenAI({
    apiKey : config.geminiAPI
})

export default gemini