import { useParams } from "react-router-dom"



export function Product(props){
    const params = useParams()
    const renderProduct = props.products.find(product => String(product.id) === params.id)
    
    return (
        <h1>{renderProduct.title}</h1>
    )
}