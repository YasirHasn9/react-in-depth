import {Link , Route , Switch, useHistory, useParams, useRouteMatch} from "react-router-dom"
import Category from "./Category"


const Categories = props => {
    console.log("Categories" , props.products)
    const params = useParams()
    console.log("params from the user" , params)

    let products = props.products
    const {url , path} = useRouteMatch()

    // receive data and  extract the category names
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
        <>
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

                
                getCategoryNames(products).map(category => {
                    return (
                        <>
                        <div >
                        <Link key={category.id} to={`${path}/${category}`}>
                            {category}
                        </Link>
                        </div>
                        </>
                    )
                })
            }

            </div>
                        
            </>
    )
}

export default Categories