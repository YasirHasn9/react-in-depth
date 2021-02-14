import {Link } from "react-router-dom"


const Products = props => {

    const getCategoryNames = arr  => {
        let uniqueValue = {}
        for (let i = 0 ; i < arr.length ; i++){
            if(!uniqueValue[arr[i].category]){
                uniqueValue[arr[i].category] = 1
            } else {
                uniqueValue[arr[i].category] += 1
            }
        }

        return Object.keys(uniqueValue)
    }
    console.log(getCategoryNames(props.products))
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