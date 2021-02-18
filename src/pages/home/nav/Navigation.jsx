import {Link} from "react-router-dom"

// styled
import {Navbar , ListNavigation } from "./style.navigation"

export const Navigation = props => {
    return (
        <Navbar>
            <div>Logo</div>


            <ListNavigation >
                <li><Link>Home</Link></li>
                <li><Link>Shop</Link></li>
                <li><Link>Login</Link></li>
                <li><Link>Contact</Link></li>
                <li><Link>About</Link></li>
            </ListNavigation >


        </Navbar>
    )
}
