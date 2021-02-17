import {Link} from "react-router-dom"

import {Wrapper,Product} from "./style.shop"
export function Shop({products}){
    return (
        <>
        <Wrapper>
            {
                products.map(product => (
                    <Product key={product.id}>
                        <p>{product.title}</p>
                        <div className="img">
                        
                           <img src={product.image} alt={product.title} />
                        </div>
                        <p>Price: {product.price}</p>
                        <button><Link>See More</Link></button>
                    </Product>
                ))
            }
        </Wrapper>
        </>
    )
}