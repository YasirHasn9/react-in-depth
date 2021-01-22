import React from "react"



const CountChanger = props => {
    const {changeCounter , label} = props

    return (
        <div>
            <button onClick={changeCounter}>{label}</button>
        </div>
    )
}

export default CountChanger