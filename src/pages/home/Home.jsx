
import {Route , Link, useRouteMatch} from "react-router-dom"
// components
import {Shop} from "../shop/Shop"
import {Product} from "../product/Product"

export const Home = (props) => {
    const {path} = useRouteMatch()
    return(
        <div>
            wrapper
            <div>navigation</div>
            <ul>
                <li><Link to="/home">Home</Link></li>
                <li>about</li>
                <li><Link to={`${path}/shop`}>Shop</Link></li>
            </ul>


            <div>
                <Route
                exact
                 path={`${path}/shop`} 
                 render={propsRoute => <Shop {...propsRoute} products={props.products} />} />
                <Route 
                path={`${path}/shop/:id`} 
                render={propsRoute => <Product {...propsRoute} products={props.products} />}  />
            </div>
        </div>
    )
}