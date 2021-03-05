// form in react and how to handle it 
// form contains inputs and labels, so we can get an information form the customer
import { useState } from "react"
import {Container , Row} from "react-bootstrap"


export const ReactFrom = () => {
    const [fname , setName] = useState("")
    const [fav_veh , setFavVeh] = useState("")
    const [isHappy, setIsHappy] = useState(false)
    return (
        <Container style={{padding:"200px", background:"#eee"}}>
            <Row>
                <p>Name: <h3>{fname ? fname : "Unknown"}</h3></p>
            </Row>

            <Row>
                <p>Fav Vehicle: {fav_veh ? fav_veh : "no idea"}</p>
            </Row>

            <Row>
                <p>The mood is {isHappy ? "Happy" : "unHappy"}</p>
            </Row>


        <form>
            <label htmlFor="fname">name</label>



            <input onChange={e => {
                setName(e.target.value)
            }} type="text" name="fname" />
            <br />




            <label  htmlFor="fav_vehicle" >Fav Vehicle</label> 



            <select onChange={e => {
                setFavVeh(e.target.value)
            }} id="fav_vehicle" name="fav_vehicle">
                <option>truck</option>
                <option>car</option>
                <option>airplane</option>
            </select>




            <br />
            <label htmlFor="isHappy">Are you happy</label>
            <input 
            onChange={e => setIsHappy(e.target.checked)} 
            name="isHappy" type="checkbox"
            id="isHappy"
            value={isHappy}
             />
            <br />
            <input type="submit" />
        </form>
        </Container>
    )
}