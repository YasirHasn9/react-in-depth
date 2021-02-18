import {useEffect, useState} from "react"
import {Route, Switch, Link} from "react-router-dom"
import axios from "axios"


// pages/components
import {Home} from "./pages/home/Home"
import {Shop} from "./pages/shop/Shop"



// style
import {Theming} from "./global/style.theming"
import {GlobalStyle} from "./global/style.global"


function App() {
  const [products, setProducts] = useState([])

  useEffect(( ) => {
    axios.get("https://fakestoreapi.com/products")
    .then(res =>  setProducts(res.data))
    .catch(err => console.log(err)) 
  } , [])
  return (
    <Theming>
      <GlobalStyle />
      <div>
        {/* <Link to="/home">Home</Link> */}
      </div>
      <Switch>
        <Route path="/" render={props => <Home {...props} products={products} />}  />
        {/* <Route path="/shop" render={props => <Shop {...props} products={products} />}  /> */}
      </Switch>
    </Theming>
  );
}

export default App;
