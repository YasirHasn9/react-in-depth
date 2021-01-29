

import HOC from "./HOC"

const Button = props => <button style={{
    padding:'1rem 2rem',
    fontSize:'1.6rem',
    margin:'1rem'
}}>{props.btnText ? props.btnText  : "it is just a button"}</button>
const HelloWorld = props => <div>{props.greet?props.greet:"It is supposed to be a welcomed message"}</div>


const Btn = HOC(Button)
const Greet = HOC(HelloWorld)
const DisplayWrappedComponentsByHOC = () => {
    return (
        <>
        <Btn />
        <Greet />
        </>
    )
}

export default DisplayWrappedComponentsByHOC