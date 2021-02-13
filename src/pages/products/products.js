import {Link } from "react-router-dom"


const Products = props => {
    return (
        <div>
            {props.products.map(product => (
                <div>
                   <Link to={`/products/${product.id}`}> <p>{product.title}</p></Link>
                </div>
            ))
            }
        </div>
    )
}

export default Products