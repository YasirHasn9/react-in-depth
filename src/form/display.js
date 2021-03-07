
export const Display = ({notes , deleteNote}) => {
    console.log("notes",notes)
    return (
        <div>
            <h1>Display</h1>
            {
                notes.map(note => (<div>
                    <p>{note.title}</p>
                    <p>{note.body}</p>
                    <button onClick={() => deleteNote(note.id)}>delete</button>
                </div>))
            }

        </div>
    )
}