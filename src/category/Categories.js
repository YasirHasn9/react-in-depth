import {Link , Route , Switch, useHistory, useRouteMatch} from "react-router-dom"
import Category from "./Category"


const Categories = props => {


    const {url , path} = useRouteMatch()

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
                getCategoryNames(props.products).map(category => {
                    return (
                        <>
                        <div style={{backgroundColor:"red"}}>
                        <Link  onClick={() => console.log(`${path}/${category.trim()}`)} to={`${path}/${category.trim()}`} style={{fontSize:"1.6rem"}}>{category}</Link>
                        </div>
                        </>
                    )
                })
            }

            </div>
            <div>
                        
                        <Route 
                              exact 
                              path={`${path}/${document.location.pathname}`} 
                              render={props =>  <Category {...props} products={props.products}/>} 
                         />
                      </div>
        
            </>
    )
}

export default Categories