import React, {useState} from "react"
import PropTypes from "prop-type"


const City = props => {
    console.log("city",props)

    return (
        <div
        style={{
            display:"flex",
            justifyContent:"space-around",
            flexWrap:"wrap",
            width:"80%",
            margin: "0 auto",
            background:"#333"
        }}>
        {
            props.cities.map(city => {
                return (
                    <div style={{
                        background:"#777"
                    }}>
                        <p>City: {city.city}</p>
                        <p>State: {city.state}</p>
                        <p>population: {city.population}</p>
                        <p>Land Area: {city.land_area}</p>
                    </div>
                )
            })
        }
        </div>
    )
}

// City.propTypes = {
//     cities :PropTypes.arrayOf(
//         PropTypes.shape({
//             city:PropTypes.toString,
//             state:PropTypes.string ,
//             population: PropTypes.number,
//             land_area: PropTypes.number,
//         })
//     )
// }
export default City