// useReducer is alternative for useState 
// its great for complex data and if the new state relies on the previous one\

import {useState , useReducer} from "react"
import { Container, Row,Col, Button } from "react-bootstrap"


// reducer
// const reducer = (state , action) => {
//     switch(action.type){
//         case "INC":
//             return {count: state.count + 1}
        
//         case "DEC":
//             return {count:state.count - 1}

//         default:
//         throw new Error("")
//     }
// }
const reducer = (state , action) => {
    switch(action.type){
        case "INC":
            return {count: state.count + 1}
        case "DEC":
            return {count : state.count -1}
        default:
            throw new Error("Error")
    }
}
export  const  Counter = () => {
    const [stateCounter , setStateCounter] = useState(0)
    const [reducerCounter, dispatch] = useReducer(reducer , {count:0})

    // state 
    const incState = () => setStateCounter(prev => prev + 1)
    const decState = () => setStateCounter(prev => prev - 1)


    // REDUCER  
    const incReducer = () => dispatch({type:"INC"})
    const decReducer = () => dispatch({type:"DEC"})
    // console.log(reducerCounter)

    
    return (
        <Container>
            <Row>
                <Col>
                    <h1>UseState</h1>
                    <p>{stateCounter}</p>
                    <Button onClick={incState}>Inc</Button>
                    <Button onClick={decState}>Dec</Button>
                </Col>
                <Col>
                     <h1>UseReducer</h1>
                     <p>{reducerCounter.count}</p>
                     <Button onClick={incReducer}>Inc</Button>
                     <Button onClick={decReducer}>Dec</Button>
                </Col>
            </Row>
        </Container>
    )
}
