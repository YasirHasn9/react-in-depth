
import {Link} from "react-router-dom"

let style = {
    textDecoration:"none",
    color:"#333",
    fontSize:"1.6rem",
    background:"#eee",
    padding:"1rem 2rem",
    borderRadius:"1rem"
}
const Home = () => {
    return (
        <div>
            <nav style ={
                {
                    width:"40%",
                    height:"6rem",
                    display:"flex",
                    justifyContent:"space-around"
                }
            }>
                <Link style={style} to="/">Home</Link>
                <Link style={style} to="/categories">Categories</Link>
            </nav>

            <h1>Home</h1>
        </div>
    )
}

export default Home