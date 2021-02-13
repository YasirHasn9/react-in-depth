import Products from "../products"

import {useParams} from "react-router-dom"

const Product = (props) => {
    const params = useParams()
    let renderProduct = props.products.find(item => item.id == params.id)
    console.log(renderProduct)
    console.log(params)
    return (
        <div>
            <h2>{renderProduct.title}</h2>
            <img src={renderProduct.image} alt={renderProduct.title} />
            <p>{renderProduct.description}</p>
            <i>{renderProduct.price}</i>
        </div>
    )
}
export default Product