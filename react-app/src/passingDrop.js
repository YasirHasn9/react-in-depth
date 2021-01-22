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


function Parent(props){
    return (
        <div>
        Parent: {props.parentData.name}
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