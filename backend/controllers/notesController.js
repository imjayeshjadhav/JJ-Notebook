import { Note } from "../model/Note.js"

export const getAllNotes = async (req,res) =>{
    try {
        const notes = await Note.find().sort({createdAt:-1}) //Newest first
        res.status(200).json(notes)
    } catch (error) {
        console.error("Error in getAllNotes Controller")
        res.status(500).json({message: "Internal Server error"})
    }
}

export const getNoteById = async (req,res)=>{
    try {
        const note = await Note.findById(req.params.id)
        if(!note) return res.status(404).json({message: "Note not found"})
        res.json(note)
    } catch (error) {
        console.error("Error in getNoteById Controller")
        res.status(500).json({message: "Internal Server error"})
    }
}

export const createNote = async (req,res) =>{
    try {
        const {title, content} = req.body
        const note = new Note({title:title, content:content})

        const savednote = await note.save()
        res.status(201).json(savednote)
    } catch (error) {
        console.error("Error in createNote Controller")
        res.status(500).json({message: "Internal Server error"})
    }
}

export const updateNote = async (req,res) =>{
    try {
        const{title,content}= req.body
        const updatedNote = await Note.findByIdAndUpdate(req.params.id, {title,content},{new:true})

        if (!updatedNote) return res.status(404).json({message:"Note not found"})

        res.status(200).json(updatedNote) 

    } catch (error) {
        console.error("Error in updateNote Controller")
        res.status(500).json({message: "Internal Server error"})
    }
}

export const deleteNote = async (req,res) =>{
    try {
        const deletedNote = await Note.findByIdAndDelete(req.params.id)

        if (!deletedNote) return res.status(404).json({message:"Note deleted successfully found"})

        res.status(200).json(deletedNote) 

    } catch (error) {
        console.error("Error in deleteNote Controller")
        res.status(500).json({message: "Internal Server error"})
    }
}