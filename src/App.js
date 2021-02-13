import {useEffect, useState} from "react"
import {Route, Switch, Link} from "react-router-dom"
import axios from "axios"

// Pages 
import Home from "./pages/home/home"
import Products from "./pages/products/products"

let style = {
  textDecoration:"none",
  color:"#333",
  fontSize:"1.6rem",
  background:"#eee",
  padding:"1rem 2rem",
  borderRadius:"1rem"
}

function App() {

  const [products, setProducts] = useState([])

  useEffect(( ) => {
    axios.get("https://fakestoreapi.com/products")
    .then(res =>  setProducts(res.data))
    .catch(err => console.log(err)) 
  } , [])
  return (
    <div className="App">
      <Home />
      <Switch>
        <Route path="/products" render={props => <Products {...props} products={products} />} />
      </Switch>
    </div>
  );
}

export default App;
