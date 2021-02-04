// the best way to optimize a react component that renders the same when given same props is to use 
// higher order component and wrap it in React.memo()

import React from "react"

const ImFun = () => {
    return (
        <div>
            <p>Hi, Im a functional component. optimize me </p>
        </div>
    )
}


// React.memo() will return a purified component. when ever there is a change in states and props 
// react will check them if they are equal to the old ones and if not , it won't render this component
export const  MemoFun = React.memo(ImFun)