// we can pass props from component to another 
// it starts from the top to bottom
/*


                        parent prop
                          |       \
                        /   \       \
                   child1     child2  \
                   /            \       \
            grandchild1          grandchild2
*/ 

function Child(props){
    return (
        <h2>{props.grandChildName}</h2>
    )
}
function Parent(props){
    return (
        <div>
        <h1>Parent: {props.parentData.name}</h1>
        <Child grandChildName={props.parentData.grandChild}/>
        </div>
    )
} 


function GrandFather(){
    const parentData = {
        name:"Gilbert",
        child:"Regina",
        grandChild:"Ryan"
        }

        return (
            <div style={{
                background:"red",
                color:"#fff"
            }}>
                <Parent parentData={parentData} />
            </div>
        )
}
export default GrandFather