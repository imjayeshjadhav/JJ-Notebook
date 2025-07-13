import express from "express"
import dotenv from "dotenv"
import cors from 'cors'
import path from 'path'
import rateLimiter from "./middleware/rateLimitter.js"
import notesrouter from "./routes/notesRoute.js"
import { connectDB } from "./config/db.js"
import job from "./config/cron.js"

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5001
const __dirname = path.resolve()

if(process.env.NODE_ENV !== "production" ){
    app.use(cors({
        origin:"http://localhost:5173",
    }))
}

if(process.env.API_URL === "production"){
    job.start();
}

app.use(express.json())

// app.use(rateLimiter)

app.use('/api/notes', notesrouter)

if(process.env.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname,"../frontend/dist")))

    app.get("*",(req,res)=>{
        res.sendFile(path.join(__dirname,"../frontend","dist","index.html"))
    })
}

app.get("/api/health", (req,res) =>{
    res.status(200).json({success:true})
})

connectDB().then(()=>{
    app.listen(PORT,()=>{
        console.log(`Server started on port ${PORT} `)
    })
})


