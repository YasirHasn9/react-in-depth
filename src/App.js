import {useEffect, useState} from "react"
import {Route} from "react-router-dom"
import axios from "axios"


// pages/components
import {Home} from "./pages/home/Home"
import {Shop} from "./pages/shop/Shop"
import {Product} from "./pages/product/Product"



// style
import {Theming} from "./global/style.theming"
import {GlobalStyle} from "./global/style.global"

// bootstrap
import {PlayingWithBootstrap} from "./testBootstrap/index"

// form in react 
import {Notes} from "./form/index"


function App() {
  return (
    <Theming>
      <GlobalStyle />
        <Notes />
    </Theming>
  );
}

export default App;
