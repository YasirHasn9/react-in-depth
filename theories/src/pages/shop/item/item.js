import {useParams} from "react-router-dom"

const Item = props => {
    let params = useParams()
    const renderItem = props.items.find(item => `${item.id}` === params.id)
    console.log(renderItem)
    return (
        <>
        {renderItem &&  <div>
            <h3>{renderItem.title}</h3>
            <img src={renderItem.image} alt={renderItem.title} />
            <p>{renderItem.description}</p>
            <p>{renderItem.price}</p>
        </div>}
       
        </>
    )
}

export default Item