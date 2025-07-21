import gemini from "../../utils/gemini"

type Message = {
    message: string
}

const geminiEmailgenerate = async (payload: Message) => {

    try {
        const res = await gemini.models.generateContent({
            model: "gemini-2.5-flash",
            contents: `${payload.message}`
        })

        return res.text
    }
    
    catch (err) {
        console.log(err)
    }
}

export const emailServices = {
    geminiEmailgenerate
}