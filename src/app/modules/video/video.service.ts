import gemini from "../../utils/gemini"

type Promt = {
    message: string
}

const videoGenerator = async (payload : Promt) => {

    let operations = await gemini.models.generateVideos({
        model : "veo-3.0-generate-preview",
        prompt : payload.message,
        config : {
            personGeneration : 'allow_all',
            aspectRatio : "16 : 9"
        }
    })

    while (!operations.done){
        await new Promise((resolve) => setTimeout(resolve,10000) )
        operations = await gemini.operations.getVideosOperation({
            operation : operations
        })
    }

    const videoUri = operations.response?.generatedVideos?.[0].video?.uri

    return videoUri

}

export const videoGeneratorService = {
    videoGenerator
}