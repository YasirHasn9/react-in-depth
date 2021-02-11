import React, { useEffect } from "react"
import {IPage} from "../interfaces/page"
import {logging} from "../config/logging"


const Home : React.FC<IPage> = (props) => {
    useEffect(() => {
        logging.info(`loading ${props.name}`)
    } , [props.name ])
    return <p>This is the home page</p>
}

export default Home