import {useEffect, useState} from "react"
import {Route, Switch, Link} from "react-router-dom"
import axios from "axios"


// pages/components
import {Strategy} from "./strategy"
import {Home} from "./pages/home/Home"
import {Shop} from "./pages/shop/Shop"



function App() {

  const [products, setProducts] = useState([])

  useEffect(( ) => {
    axios.get("https://fakestoreapi.com/products")
    .then(res =>  setProducts(res.data))
    .catch(err => console.log(err)) 
  } , [])
  return (
    <div>
      <div>
        <Link to="/strategy">Strategy</Link>
        <Link to="/home">Home</Link>
      </div>
      <Switch>
        <Route path="/strategy" component={Strategy} />
        <Route path="/home" render={props => <Home {...props} products={products} />}  />
        {/* <Route path="/shop" render={props => <Shop {...props} products={products} />}  /> */}
      </Switch>
    </div>
  );
}

export default App;
