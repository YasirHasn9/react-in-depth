import React from "react"
export default  class DifferentBehaviors extends React.Component{
    constructor(){
        super()
        this.state = {
            checked:false
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(e){
        console.log("this is e",e)
        this.setState({checked:!this.state.checked})
    }

    render(){
        return (
            <div>
                <button onClick={this.handleClick}>Button with no passing event</button>
                <button onClick={e => this.handleClick(e)}>Button with event</button>
            </div>
        )
    }
}

// at the moment, i couldnt find any difference between using both ways 