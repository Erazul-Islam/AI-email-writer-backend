import express, { Application } from 'express'
import cors from 'cors'
import router from './app/routes'

const app: Application = express()

const corsOptions = {
    origin: ['http://localhost:3000'],
    credential: true,
    method: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: 'Content-Type,Authorization'
}

app.use(express.json())
app.use(cors(corsOptions))
app.use('/api/v1',router)
console.log(process.cwd())
app.get('/',(req,res) => {
    res.send("Your server is running")
} )

export default app