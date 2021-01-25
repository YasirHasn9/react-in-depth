import {useState,useEffect} from "react"


const CleanUp = () => {


    const [position , setPosition] = useState({x:0 , y:0})


    useEffect(() => {
        const setFromEvent = e => setPosition({x:e.clientX , y:e.clientY})

        window.addEventListener("mousemove" , setFromEvent)
        console.log(position)

        return window.removeEventListener("mousemove" , setFromEvent)
    } , [])

    return (
        <div>
            {position.x} : {position.y}
        </div>
    )
}


export default CleanUp
