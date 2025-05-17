import express from "express"
import { createNote, deleteNote, getAllNotes, updateNote } from "../controllers/notesController.js"

const Notesrouter  = express.Router()

Notesrouter.get('/', getAllNotes)

Notesrouter.post('/',createNote)

Notesrouter.put('/:id',updateNote)

Notesrouter.delete('/:id',deleteNote)

export default Notesrouter;