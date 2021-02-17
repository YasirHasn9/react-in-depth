import { useParams } from "react-router-dom"




const Category = props => {
    const params = useParams()
    console.log("params from the props " , params)

    console.log("props from the category",props)
    return (
        <>
                <h1>Category</h1>
                <p>{params.id}</p>
        </>
    )
}

export default Category