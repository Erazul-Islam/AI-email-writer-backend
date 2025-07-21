import mongoose from "mongoose"
import config from "./app/config"
import app from "./app"

async function main() {
    try {
        mongoose.connect(config.database_url as string)
        app.listen(config.port,() => {
            console.log(`Your server is running on  ${config.port} `)
        } )
    }
    catch (err){
        console.log(err)
    }
}

main()