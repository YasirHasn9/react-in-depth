
import {useEffect, useState} from "react"

const ChangeName = () => {
    const [ name , setName] = useState("Yasir")

    const handleChange = e => setName("Ahmed")
    useEffect(() => {
        // this is will be on fire every time a state gets changed
        console.log("UseEffect")
        setTimeout(() => {
            setName("MArween")
        }, 2000)
    },[name])

    console.log("render")
    return (
        <div>
            {name}
            <button onClick={handleChange}>Change</button>
        </div>
    )
}

export default ChangeName