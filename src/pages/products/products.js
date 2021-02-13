import {useParams } from "react-router-dom"


const Products = props => {
    const params = useParams()
    console.log(params)
    return (
        <div>
            {props.products.map(products => (
                <div>
                    <p>{products.title}</p>
                </div>
            ))
            }
        </div>
    )
}

export default Products