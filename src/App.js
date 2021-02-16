import {useEffect, useState} from "react"
import {Route, Switch, Link} from "react-router-dom"
import axios from "axios"

// Pages 
import Home from "./pages/home/home"
import Categories from "./category/Categories"
// import Products from "./pages/products/products"
// import Product from "./pages/products/product/product"

let style = {
  textDecoration:"none",
  color:"#333",
  fontSize:"1.6rem",
  background:"#eee",
  padding:"1rem 2rem",
  borderRadius:"1rem"
}


/*
The plan of tomorrow 
created a function that extract the names of the categories 
      each name is gonna be a button
            each button will display a component holds all the products that belong to its category
                 provide a btn in each products that takes the client to whole info of the product
*/

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
        <Route exact path="/categories" render={props => <Categories {...props} products={products} />} />
      </Switch>
    </div>
  );
}

export default App;
