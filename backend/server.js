import express from "express"
import Notesrouter from "./routes/notesRoute.js"
import { connectDB } from "./config/db.js"
import dotenv from "dotenv"

const app = express()
const PORT = process.env.PORT || 5001

dotenv.config()
connectDB()

app.use(express.json())
app.use('/api/notes', Notesrouter)

app.listen(PORT,()=>{
    console.log(`Server started on port ${PORT} `)
})

