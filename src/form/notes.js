import { useState } from "react"


export const FormNotes = (props) => {



    const [note , setNote] = useState({title:"" , body:""})
    const handleChange = e => {
        setNote({...note , [e.target.name]:e.target.value})
    }

    const handleSubmit = e => {
        e.preventDefault()
        if(!note.title || !note.body){
            alert("You have to submit title and note")
            return 
        }
        props.addNewNote(note)
        setNote({title:"" , body:""})
    }

    return (

            <form onSubmit={handleSubmit}>
                <input 
                type="text" 
                id="title"  
                value={note.title} 
                placeholder="Title" 
                name="title"  
                onChange={handleChange} 
                required
                />
                <br />
                <textarea id="textArea" type="text" placeholder="Text Area" name="body"  onChange={handleChange} value={note.body} />
                <br />

                <input type="submit" />
            </form>

    )
}