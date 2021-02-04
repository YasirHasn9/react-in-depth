
// import GrandFather from "./passingDrop"
// import CountChanger from "./CountChanger"
// import TestEffects from "./sideEffects"
// import CleanUp from "./cleanup"
// import DogApp from "./effects/Dog"
// import {useState, useEffect} from "react"
// import NewsFeed  from "./effects/newsFeed"
// import Name from "./propsChecking/name"
// import Lifecycle from "./Lifecycle/index"
// import ChangeName from "./Lifecycle/example"
// import ListCities from "./Lifecycle/ListCities"
import "./App.css"
// import DisplayWrappedComponentsByHOC from "./HOC/index"
// import ManageState from "./hooks/index"
import DifferentBehaviors from "./Lifecycle/checkBehavior"
import {MemoFun} from "./hooks/memo"

// This is a React components
// Component must be capitalized 
// it should return a react element 
function App() {
/*
  // // if console log what something gives us it will return an array of state and setter
  // const something = useState(false) 
  // so we can get the state and the setter
  // const state = something[0]
  // const fun = something[1]
  // we can achieve the same result by writing only one line

  const [state , setState] = useState(true)
  const [count , setCount] = useState(0)

  // this is for the purpose of props-type
  const [name , setName] = useState("")
  const handleChange = e => setName(e.target.value)

  // this is a powerful feature react has 
  // whenever the state changes react knows what to do and renders on the dom
  const handleAdding = () => {
    setCount(() => count + 1)
  }
  const multi = () => {
    setCount(() => count * 5)
  }
  const reset = () => {
    setCount(0)
  }
*/
  return (
    <div className="App">
     
        {/* <p>Count: {count}</p>


        we can make the button in separate component 
        and also we can named CountChanger
        <button onClick={handleAdding}>Add</button>
        <button onClick={multi}>Multiply By 5</button>
        <button onClick={reset}>Reset</button>
        <CountChanger changeCounter={handleAdding} label="Increase"/>
        <CountChanger changeCounter={multi} label="Multiply"/>
        <CountChanger changeCounter={reset} label="Reset"/>

        <TestEffects />

        <CleanUp />
      <GrandFather />
      <DogApp />
      <NewsFeed />
      <Name name={name} handleChange={handleChange} />
      <Lifecycle />
      <ChangeName />
      <h1>Test </h1>
      <Lifecycle />
  

      <ListCities /> */}
      <header className="App-header">
        <h1>Hello</h1>
        <h2>You can uncomment any component to play with</h2>
        <DifferentBehaviors />
      </header>
    </div>
  );
}

export default App; 