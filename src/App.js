import { useEffect, useState } from "react";
// import {Route} from "react-router-dom"
// import axios from "axios"

// pages/components
// import {Home} from "./pages/home/Home"
// import {Shop} from "./pages/shop/Shop"
// import {Product} from "./pages/product/Product"

// style
import { Theming } from "./global/style.theming";
import { GlobalStyle } from "./global/style.global";

// bootstrap
// import {PlayingWithBootstrap} from "./testBootstrap/index"

// Crud
import { TodoList } from "./crud/TodoList";

// deep look at forms in react
import { FormInReact } from "./deepLookAtForms/index";
// Other form inputs
import { InputTypes } from "./deepLookAtForms/inputTypes";
import { Users } from "./AddUser/users";
function App() {
  return (
    <Theming>
      <GlobalStyle />
      <Users />
    </Theming>
  );
}

export default App;
