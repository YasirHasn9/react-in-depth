import React , {Component} from "react"
import { data } from "./cities"
import City from "./City"

class ListCities extends Component{

    constructor(){
        super()
        this.state = {
            cities: data
        }
    }

    render(){

        return(
            <div>
                ListCities
                <City cities={this.state.cities} />
            </div>
        )
    }
}

export default ListCities
