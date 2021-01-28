
// import {useEffect, useState} from "react"

// const ChangeName = () => {
//     const [ name , setName] = useState("Yasir")

//     const handleChange = e => setName("Ahmed")
//     // useEffect(() => {
//     //     // this is will be on fire every time a state gets changed
//     //     console.log("UseEffect")
//     //         setName("Marween")
  
//     // },[name])

//     console.log("render")
//     return (
//         <div>
//             {name}
//             <button onClick={handleChange}>Change</button>
//         </div>
//     )
// }


import React , {Component} from "react"

class ChangeName extends Component{
    constructor(){
        // first thing to render is here 
        console.log("constructed")
        super()
        this.state = {
            name:"Yasir"
        }
    }
    handleChange = e => {
        // since it is an arrow function we dont need to bind in the constructor
        this.setState({name:"Joe"})
    }
    componentDidMount(){
        // this will be fired as soon as the render invoked
        console.log("mounted")
    }
    componentDidUpdate(prevProp , prevState){
        console.log("will be fired when the state changed")
        console.log("prevState" , prevState.name)
        console.log("prevProp" , prevProp)
    }

    render(){
        // this will be fired the first thing after the constructor method
        console.log("render")
        return (
            <div>
                <p>Hello {this.state.name}</p>
                <button  onClick={this.handleChange}>change</button>
            </div>
        )
    }
}
export default ChangeName