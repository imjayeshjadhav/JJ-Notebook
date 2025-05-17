import express from "express"
import { createNote, deleteNote, getAllNotes, getNoteById, updateNote } from "../controllers/notesController.js"

const Notesrouter  = express.Router()

Notesrouter.get('/', getAllNotes)

Notesrouter.get('/:id', getNoteById )

Notesrouter.post('/',createNote)

Notesrouter.put('/:id',updateNote)

Notesrouter.delete('/:id',deleteNote)

export default Notesrouter;