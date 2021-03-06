
export const Display = ({notes}) => {
    return (
        <div>
            <h1>Display</h1>
            {
                notes.map(note => (<div>
                    <p>{note.title}</p>
                    <p>{note.body}</p>
                </div>))
            }

        </div>
    )
}