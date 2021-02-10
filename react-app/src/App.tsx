// ts project 
import {Link} from "react-router-dom"

// style 
import {ThemeProvider}  from "styled-components"
import GlobalStyle from "./TSproject/global/index"
import {lightTheme , darkTheme} from "./TSproject/theme";
import {NavBar} from "./TSproject/style"
import "./App.css"


const App: React.FC  = ():JSX.Element => {
 
  return (

    <ThemeProvider theme={lightTheme || darkTheme}>
          <GlobalStyle />
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