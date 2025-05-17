import express from "express"
import Notesrouter from "./routes/notesRoute.js"

const app = express()

app.use('/api/notes', Notesrouter)

app.listen(5001,()=>{
    console.log("Server started on port 5001")
})

