import { useHistory, useRouteMatch } from "react-router-dom"




const Category = props => {
    console.log(document.location.pathname)
    console.log("this is history from " , props.history)
    return (
        <h1>Category</h1>
    )
}

export default Category