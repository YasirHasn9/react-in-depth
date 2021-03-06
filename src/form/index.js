import { useState } from "react"




import {FormNotes} from "./notes"
import {Display} from "./display"

export const Notes = () => {
    const [notes, setNotes] = useState([{title:"Hello from the main" , body:"This is body"}])

    const addNewNote = (note) => {
         const newNote = {
             title:note.title,
             body:note.body,
             id:Date.now()
         }
        setNotes([newNote , ...notes])
    }
    return (
        <div style={{background:"#eee" ,
                     width:"100%",
                     height:"100vh",
                      display:"flex",
                      justifyContent:"center", }}
                      >
            <FormNotes addNewNote={addNewNote} />
            <Display notes={notes} />
        </div>
    )
}