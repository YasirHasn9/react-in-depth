// the purpose of this file is to the backbone of our project
// here, we are gonna load the initial state 
import React, { useEffect } from "react"
import {Route , Switch, Link, RouteComponentProps} from "react-router-dom"
import {logging} from "./config/logging"
import {routes} from "./config/route"

const Application: React.FC<any> = () => {
    useEffect(() => {
        logging.info("loading application")
    } , [ ])
    return (
        <>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Switch>
            {
                routes.map((route , idx) => {
                    return <Route 
                            key={idx}
                            name={route.name}
                            exact={route.exact} 
                            path={route.path}
                            render={(props:RouteComponentProps) =>
                                 <route.component {...props} {...route.props}  />}
                            />
                })
            }
        </Switch>
        </>
    )
}

export default Application