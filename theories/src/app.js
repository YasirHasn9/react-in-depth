import React,{useEffect , useState} from "react"
import axios from "axios"
import {Switch , Link , Route} from "react-router-dom"

// pages 
import Shop from "./pages/shop/shop"
import Item from "./pages/shop/item/item"

// styled 
import {Wrapper , NavBar} from "./style.app"

const App = () => {
    const [items , setItems ] = useState([])

    useEffect(() => {
        axios.get("https://fakestoreapi.com/products")
        .then(res =>  setItems(res.data))
        .catch(err => console.log(err))
    } , [])
    return (
      <Wrapper>
          <NavBar>
              <Link to="/">Home</Link>
              <Link to="/shop">Shop</Link>
          </NavBar>
            <Switch>
                
                <Route exact path="/" />
                <Route exact path="/shop" render={(props) => <Shop {...props} items={items} />} />
                <Route path="/shop/:id">
                    <Item items={items}/>
                </Route>     
            </Switch>

      </Wrapper>
    )
}

export default App