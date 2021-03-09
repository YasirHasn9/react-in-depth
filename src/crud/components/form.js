
import { useState } from "react"
import {Form, FormGroup , FormControl ,FormLabel,Button} from "react-bootstrap" 


export const FormNote = props => {
    const [note , setNote] = useState({
        id:Date.now(),
        title:"",
        info:""
    })

    const handleChange =e => {
        setNote({...note , [e.target.name]:e.target.value})
    }
    const handleSubmit = e => {
        e.preventDefault()
        props.addNote(note)
        setNote({
        title:"",
        info:""
        })
    }
    return (
        <Form onSubmit={handleSubmit}>
            <FormGroup>
                <FormLabel>Title</FormLabel>
                <FormControl 
                name="title"
                onChange={handleChange}
                type="text"  
                value={note.title}
                placeholder="Title"
                />
            </FormGroup>
            <FormGroup>
                <FormLabel>Information</FormLabel>
                <FormControl
                      name="info"
                 onChange={handleChange}
                 type="text" 
                 value={note.info}
                 placeholder="Information"
                 />
            </FormGroup>
            <Button type="submit">Submit</Button>
        </Form>
    )
}