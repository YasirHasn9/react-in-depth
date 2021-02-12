import React from "react"
import {Link} from "react-router-dom"
import {Wrapper, CategoryDiv} from "./shop.style"

const Shop = ({items}) => {

    return (
        <Wrapper>
            {
                items.map(item => (
                    <Link to={`/shop/${item.id}`}>
                        <CategoryDiv>
                            <img src={item.image} alt={item.title} />
                        </CategoryDiv>
                    </Link>
                ))
            } 
        </Wrapper>
    )
}

export default Shop




/*
    const getCategoriesNames = items => {
        let uniqueValues = {}
        for(let i = 0 ; i < items.length ; i++){
            if(!uniqueValues[items[i].category]) {
                uniqueValues[items[i].category] = 1
            } else {
                uniqueValues[items[i].category] += 1
            }
        }
        return Object.keys(uniqueValues)
    }
*/