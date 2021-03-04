// form in react and how to handle it 
// form contains inputs and labels, so we can get an information form the customer
import {Container} from "react-bootstrap"


export const ReactFrom = () => {
    return (
        <Container style={{padding:"200px", background:"#eee"}}>
        <form>
            <label>name</label>
            <input type="text" name="name" />
            <br />
            <label htmlFor="fav_vehicle" >Fav Vehicle</label> 
            <select id="fav_vehicle" name="fav_vehicle">
                <option value={1}>truck</option>
                <option value={2}>car</option>
                <option value={3}>airplane</option>
            </select>
            <br />
            <label htmlFor="isHappy">Are you happy</label>
            <input name="isHappy" type="checkbox" id="isHappy" />
            <br />
            <input type="submit" />
        </form>
        </Container>
    )
