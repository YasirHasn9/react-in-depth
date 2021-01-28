//  This component will be a class based UI
import React,{Component} from "react"

class Lifecycle extends Component {
    // constructor is created whenever a new object is created 
    // we initialize our state 
    // we call the super() in case we props been passed to it
    // we bind the local function(dont with arrow function)
    constructor(){
        super()
        this.state = {
            dogs:[],
            id:"1",
            first_name:"suzi",
            last_name:"Claiden",
            email:"whatever@gmail.com",
            friend:[
                {
                    first_name:"Aj",
                last_name:"Alyounis"
            }
            ]
        }
         // here we can use our function and we can bind them in the constructor{}
    }


     getDogs = () => {
        fetch('https://dog.ceo/api/breed/labrador/images')
          .then(res => res.json())
          .then(dogs => {
            //   this.setState({dogs: dogs.message})
       
            dogs.message.length = 20
            this.setState({dogs:dogs.message})
            
          })
          .catch(err => console.log('noooo'));
    };

    // componentDidMount
    // it is a part of the mounting phase, it gets called
    // as soon as the render gets called
    // we can perform async action 
    // we can use setState which forces the render to re-render again
    // like fetching data via HTTP
    componentDidMount(){
        // this method is guaranteed to be called once in the whole lifecycle
        console.log("hello Did mount")
        this.getDogs()
    }
   

    // this is a required lifecycle, without we can run anything on the screen
    render(){
        return(
            <div>
                {
                    this.state.friend.map(fre => {
                        return (
                            <>
                            <p>{fre.first_name}</p>
                            <p>{fre.last_name}</p>
                            </>
                        )
                    })
                }

                <div
                style={{
                    width: "80%",
                    margin:"0 auto",
                    display:"flex",
                    justifyContent:"space-between",
                    flexWrap:"wrap"
                }}
                >{
                    this.state.dogs.map(sr => <img
                        style={{
                            width:'100px',
                            height:"100px",
                        }} src={sr} alt={sr} />)
                    }</div>
            </div>
        )
    }
}

export default Lifecycle