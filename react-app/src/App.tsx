// ts project 
import {Route , Link} from "react-router-dom"
import {ThemeProvider}  from "styled-components"
import {lightTheme} from "./theme"
import {NavBar} from "./style"
import "./App.css"


const App: React.FC  = ():JSX.Element => {
 
  return (
    <ThemeProvider theme={lightTheme}>
    <div className="App">
      <header className="App-header">
        <NavBar>
          <h1><Link to="/">Tinkers</Link></h1>
          <div>
            <Link to="/">home</Link>
            <Link to="/shop">shop</Link>
          </div>
        </NavBar>
      </header>
    </div>
    </ThemeProvider>
  );
}

export default App; 