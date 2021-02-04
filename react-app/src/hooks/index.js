// we have 2 ways to declare a state in any react functional component
// which is either choose useState or useReducer
import {useState , useReducer} from "react"

const ManageState = () => {
    // this is the old way
    // const [checked , setChecked] = useState(false)
    // const toggle = () => setChecked(checked => !checked)

    // the new way 
    const [checked, toggle] = useReducer(checked =>  !checked, false)
    console.log(checked)
    return (
        <div>
            <input style={{width:"2rem", height:"2rem"}} type="checkbox"  onChange={toggle}/>
            {checked ? "Checked" : "Not checked"}
        </div>
    )
}

export default ManageState