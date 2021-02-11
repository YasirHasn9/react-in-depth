import React, { useEffect } from "react"
import {IPage} from "../interfaces/page"
import {IRoute} from "../interfaces/route"
import {logging} from "../config/logging"


const About : React.FC = (props) => {
    useEffect(() => {
        logging.info(`loading ${props.name}`)
    } , [ ])
    return <p>This is the About page</p>
}

export default About