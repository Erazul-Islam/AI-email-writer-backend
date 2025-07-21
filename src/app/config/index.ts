import dotenv from 'dotenv'
import path from 'path'

dotenv.config({ path: path.join((process.cwd(), '.env')) })

export default {
    port : process.env.PORT,
    database_url : process.env.DATABASE_URL,
    openAPI : process.env.OPENAI_API_KEY,
    geminiAPI : process.env.GEMINI_API_KEY
}


