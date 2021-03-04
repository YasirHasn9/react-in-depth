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


import {PlayingWithBootstrap} from "./testBootstrap/index"


function App() {
  const [products, setProducts] = useState([])

  useEffect(( ) => {
    axios.get("https://fakestoreapi.com/products")
    .then(res =>  setProducts(res.data))
    .catch(err => console.log(err)) 
  } , [ ])
  return (
    <Theming>
      <GlobalStyle />
        {/* <Route exact path="/" render={props => <Home {...props} products={products} />}  />
        <Route exact path="/shop" render={props => <Shop {...props} products={products}  />} />
        <Route path="/shop/:id" render={props => <Product {...props} products={products}  />} /> */}

        {/*  */}

        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <PlayingWithBootstrap />
    </Theming>
  );
}

export default App;
