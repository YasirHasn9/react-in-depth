import logo from './logo.svg';
import './App.css';
import {useState} from "react"


// This is a React components
// Component must be capitalized 
// it should return a react element 
function App() {

  // // if console log what something gives us it will return an array of state and setter
  // const something = useState(false) 
  // so we can get the state and the setter
  // const state = something[0]
  // const fun = something[1]
  // we can achieve the same result by writing only one line

  const [state , setState] = useState(true)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {
          state && <p>The light is On</p>
        }
        {
          !state && <p>The light is Off</p>
        }
      </header>
    </div>
  );
}

export default App; 
