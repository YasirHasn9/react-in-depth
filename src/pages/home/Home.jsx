
import {Route , Link, useRouteMatch} from "react-router-dom"
// components
import {Navigation} from "./nav/Navigation"
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
           <Navigation />

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