import {Link , Route } from "react-router-dom"


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


    return (
        <div>
     
            <div 
            style={{
                width:"600px",
                height:"60px",
                display:"flex",
                justifyContent:"space-around",
                alignItems:"center",
                backgroundColor:"#eee",
            }}>
            {
                getCategoryNames(props.products).map(category => {
                    return <Link onClick={() => console.log(`/categories/${category.replace(/\s/g,'')}`)} to={`/categories/${category.replace(/\s/g,'')}`} style={{fontSize:"1.6rem"}}>{category}</Link>
                })
            }
            </div>
                    {/* 
                    now, im looking for a way to render a component that rely on the value of the text */}
                   {/* {
            props.products.map(product => (
                <div>
                   <Link to={`/products/${product.id}`}> <p>{product.title}</p></Link>
                </div>
            ))
            } */}
        </div>
    )
}

export default Products