import {Link} from "react-router-dom"

// styled
import {Navbar , ListNavigation , Logo } from "./style.navigation"

export const Navigation = props => {
    return (
        <Navbar>
            <Logo>LuckyShopping</Logo>


            <ListNavigation >
                <li><Link to="/">Home</Link></li>
                <li><Link to="/shop">Shop</Link></li>
                <li><Link>About</Link></li>
                <li><Link>Contact</Link></li>
            </ListNavigation >


        </Navbar>
    )
}
