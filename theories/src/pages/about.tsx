import React, { useEffect, useState } from "react"
import {IPage} from "../interfaces/page"
import {logging} from "../config/logging"
import { RouteComponentProps, withRouter } from "react-router-dom"

const About : React.FC<IPage & RouteComponentProps<any>> = (props) => {
    console.log(props)
    const [message, setMessage] = useState<string>("")
    useEffect(() => {
        logging.info(`About loading `)
        let id = props.match.params.id
        if(id){
            setMessage(`The page number of this page is ${id}`)
        } else {
            setMessage("No id is provided ")
        }
    } , [props ])
    return <p>{message}</p>
}

export default withRouter(About)