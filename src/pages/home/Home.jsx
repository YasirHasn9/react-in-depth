
import {Route , Link, useRouteMatch} from "react-router-dom"
// components
import {Shop} from "../shop/Shop"

export const Home = (props) => {
    const {path} = useRouteMatch()
    return(
        <div>
            wrapper
            <div>navigation</div>
            <ul>
                <li>home</li>
                <li>about</li>
                <li><Link to={`${path}/shop`}>Shop</Link></li>
            </ul>


            <div>
                <Route path={`${path}/shop`} render={propsRoute => <Shop {...propsRoute} products={props.products} />} />
            </div>
        </div>
    )
}