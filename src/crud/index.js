import {Switch , Route , Link} from "react-router-dom"
import {Container , Button} from "react-bootstrap"
import { useState } from "react"


// 
import {FormNote} from "./components/form" 
import {Notes} from "./components/Notes"

export const CRUD = () => {
    const [notes , setNotes] = useState([
        {
            id:Date.now(),
            title:"Test Title",
            info:"Test Information",
            isEdit:false
        }
    ])

    const addNote = note => {
        // copy the original notes
        let copy = [...notes]
        setNotes([note, ...copy])
    }
    const deleteNote = id => {
        const copy = [...notes]
        const idx = copy.findIndex(note => note.id == id )
        copy.splice(idx , 1)
        setNotes([...copy])
    }
    const editingNote = id => {
        let copy = [...notes]
        let idx = copy.findIndex(note => note.id == id )
    }

    return (
        <Container>
            <FormNote notes={notes} addNote={addNote} />
            <Notes notes={notes} editingNote={editingNote} deleteNote={deleteNote}/>
        </Container>
    )


}
