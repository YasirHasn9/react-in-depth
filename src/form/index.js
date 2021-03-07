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

    const deleteNote = id => {
        
        // 1.copy the original notes 
        let copyNotes = [...notes]
        // 2. find the notes through the index in the copy one
        const idx = copyNotes.findIndex(note => note.id === id)
        console.log(idx)
        // 3. delete the found note from the notes 
        copyNotes.splice(idx , 1)
        // 4. set the setter to new coptNotes
        setNotes(copyNotes)


     
   




    
    }
    return (
        <div style={{background:"#eee" ,
                     width:"100%",
                     height:"100vh",
                      display:"flex",
                      justifyContent:"center", }}
                      >
            <FormNotes addNewNote={addNewNote} />
            <Display notes={notes} deleteNote={deleteNote}/>
        </div>
    )
}