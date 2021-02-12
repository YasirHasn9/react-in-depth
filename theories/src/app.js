import React,{useEffect , useState} from "react"
import axios from "axios"
import {Switch , Link , Route} from "react-router-dom"

// pages 
import Shop from "./pages/shop/shop"

// styled 
import {Wrapper} from "./style.app"

const App = () => {
    const [items , setItems ] = useState([])

    useEffect(() => {
        axios.get("https://fakestoreapi.com/products")
        .then(res =>  setItems(res.data))
        .catch(err => console.log(err))
    } , [])
    return (
      <Wrapper>
          <nav>
              <Link to="/">Home</Link>
              <Link to="/shop">Shop</Link>
          </nav>
            <Switch>
                <Route exact path="/" />
                <Route path="/shop" render={(props) => <Shop {...props} items={items} />} />
            </Switch>
      </Wrapper>
    )
}

export default App