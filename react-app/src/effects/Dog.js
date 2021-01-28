import {useState , useEffect} from "react"
import axios from "axios"

const DogApp = () => {

    const [dogImage , setDogImage] = useState("")
    const [newImg , setNewImg] = useState(false)

    useEffect(  () => {

        axios.get("https://dog.ceo/api/breeds/image/random")
        .then(res => {
            console.log("thes" , res.data.message)
           setDogImage(() => res.data.message)
        }).catch(err => console.log(err))

                    // try {
                    //     let data = await axios.get("https://dog.ceo/api/breeds/image/random")
                    //     const image = await data.data.message
                    //     setDogImage(() => image)
                    // } catch(err){
                    //     console.log(err)
                    // }
    },[newImg])
    return (
        <div>
            <h2>Display dog image</h2>
            { dogImage ? <img style={{height:"300px" ,width:"400px" , margin:"50px"}} src={dogImage} alt="dogo" />  : "wait" }
           
            <button onClick={() => setNewImg(!newImg)}>
                new dog
            </button>
        </div>
    )
}

export default DogApp