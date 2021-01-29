// Higher Order Component
// check README out of the root react-app
import React from "react"


const HOC = Wrapped => {
    return class extends React.Component{
        state = {
            btnText:"Text button from HOC",
            greet:"Hello world, I'm glad to let you know how to get access to me"
        }
        render(){
            // this is how it works, now every component in the app if we wrapped 
            // with HOC , it will have access to this state.
            return <Wrapped btnText={this.state.btnText} greet={this.state.greet}/>
        }
    }
}
export default HOC


