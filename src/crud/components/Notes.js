import { useState } from "react"
import {Container, Button , Form , InputGroup , FormControl} from "react-bootstrap"


export const Notes = props => {
    const [isEdit, setIsEdit] = useState(false)
    const toggleEdit = () => {
        setIsEdit(!isEdit)
    }
    return(
        <Container>
            {
                props.notes.map(note => {
                    return (
                        <Container
                         style={{
                            background:"#eee",
                            border:"1px solid #000",
                            margin:"1rem"
                        }}>

                            <p>{note.title}</p>
                            <p>{note.info}</p>
                            <Button variant="danger" 
                            onClick={() => props.deleteNote(note.id)}
                            >Delete</Button>
                            <Button onClick={() => toggleEdit()}>
                                edit
                            </Button>
                            {
                                isEdit ? (<Form>
                                    <InputGroup>
                                       <FormControl type="text" value={note.title} />
                                    </InputGroup>
                                    <InputGroup>
                                       <FormControl type="text" value={note.info} />
                                    </InputGroup>
                                </Form>) : null
                            }

                        </Container>
                    )
                })
            }
        </Container>
    )
}