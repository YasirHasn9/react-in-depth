// components
import {Navigation} from "./nav/Navigation"


// style
import {Wrapper} from "./style.home"

export const Home = (props) => {
    return(
        <Wrapper>
            <div className="overlay">
           <Navigation />
            </div>
        </Wrapper>
    )
}