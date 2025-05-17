import express from "express"
import notesrouter from "./routes/notesRoute.js"
import { connectDB } from "./config/db.js"
import dotenv from "dotenv"
import rateLimiter from "./middleware/rateLimitter.js"

const app = express()
const PORT = process.env.PORT || 5001

dotenv.config()

app.use(express.json()) 
app.use(rateLimiter)
app.use('/api/notes', notesrouter)

connectDB().then(()=>{
    app.listen(PORT,()=>{
        console.log(`Server started on port ${PORT} `)
    })
})


