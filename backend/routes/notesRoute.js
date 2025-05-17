import express from "express"
import { createNote, deleteNote, getAllNotes, getNoteById, updateNote } from "../controllers/notesController.js"

const notesrouter  = express.Router()

notesrouter.get('/', getAllNotes)

notesrouter.get('/:id', getNoteById )

notesrouter.post('/',createNote)

notesrouter.put('/:id',updateNote)

notesrouter.delete('/:id',deleteNote)

export default notesrouter;