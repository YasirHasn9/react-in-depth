import {Link, useRouteMatch} from "react-router-dom"

import {Wrapper,Product} from "./style.shop"
export function Shop(props){
    const {products} = props

    const routes = useRouteMatch()
    const {url , path} = routes
    return (
        <Wrapper>
            {
                products.map(product => (
                    <Product key={product.id}>
                        <p>{product.title}</p>
                        <div className="img">
                        
                           <img src={product.image} alt={product.title} />
                        </div>
                        <p>Price: {product.price}</p>
                        <button>
                            <Link to={`${path}/${product.id}`}>
                                See More
                            </Link>
                        </button>
                    </Product>
                ))
            }
        </Wrapper>
    
    )
}