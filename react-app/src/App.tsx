// ts project 
import {Link, Route} from "react-router-dom"
import Home from "./TsProject/home"
import Shopping from "./TsProject/shopping/index"

// style 
import {ThemeProvider}  from "styled-components"
import GlobalStyle from "./TsProject/global/index"
import {lightTheme , darkTheme} from "./TsProject/global/theme";
import {NavBar} from "./TsProject/style"


const App: React.FC  = ():JSX.Element => {
 
  return (

    <ThemeProvider theme={lightTheme || darkTheme}>
          <GlobalStyle />
    <div className="App">
        <NavBar>
          <h1><Link to="/">Tinkers</Link></h1>
          <div>
            <Link to="/">home</Link>
            <Link to="/shopping">shop</Link>
          </div>
        </NavBar>
        <Route exact path="/" component={Home} />
        <Route path="/shopping" component={Shopping} />
    </div>
    </ThemeProvider>
  );
}

export default App; 