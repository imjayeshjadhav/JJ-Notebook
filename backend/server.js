import express from "express"
import dotenv from "dotenv"
import cors from 'cors'
import rateLimiter from "./middleware/rateLimitter.js"
import notesrouter from "./routes/notesRoute.js"
import { connectDB } from "./config/db.js"

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5001

app.use(express.json())

app.use(cors({
    origin:"http://localhost:5173",
}))

app.use(rateLimiter)

app.use('/api/notes', notesrouter)

connectDB().then(()=>{
    app.listen(PORT,()=>{
        console.log(`Server started on port ${PORT} `)
    })
})


