
import {Route , Link, useRouteMatch} from "react-router-dom"
// components
import {Shop} from "../shop/Shop"
import {Product} from "../product/Product"


// style
import {Wrapper} from "./style.home"

export const Home = (props) => {
    const {path} = useRouteMatch()
    console.log("This is from the home",path)
    return(
        <Wrapper>
            <div className="overlay">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li>about</li>
                <li><Link to={`/shop`}>Shop</Link></li>
            </ul>


            <div>
                <Route
                exact
                 path={`/shop`} 
                 render={propsRoute => <Shop {...propsRoute} products={props.products} />} />
                <Route 
                path={`/shop/:id`} 
                render={propsRoute => <Product {...propsRoute} products={props.products} />}  />
            </div>
            </div>
        </Wrapper>
    )
}