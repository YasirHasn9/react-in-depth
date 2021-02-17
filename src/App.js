import {useEffect, useState} from "react"
import {Route, Switch, Link} from "react-router-dom"
import axios from "axios"



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
      <ol>
        <li>
          create a home page that has:
          <ul>
            <li>navigation links</li>
            <li>each link directs the user to a different category </li>
          </ul>
          </li>
          <li> create  dynamic components:
            <ul>
              <li> each component has different items</li>
              <li>each items navigates the user to whole description of the item</li>
            </ul>
          </li>
      </ol>
    </div>
  );
}

export default App;
