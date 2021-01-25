import {useState , useEffect} from "react"
    // side effect hook tells react to run , execute some side effects 
    // it takes 2 argument a callback function and dependency 
    // dependency is an array that contains all the props,state, vars
    // when any of these factors changes causes the comp to run again
function TestEffects () {
    const [count ,setCount] = useState(0)


    useEffect(() => {
        // this side effect will run over any change in the component 
        console.log("side effect")

        // basically, here we have access to anything global inside the function a
        // from here we can manipulate them.

        // this component will never gets executed unless the count
        // gets updated
      },[/* here are the dependency */ count])


    //   we can run the useEffect only once, only when the component mounted and thats it


    useEffect(() => {
        console.log("Gets executed once")
    } , [])


    // rules of sideEffect
    // useEffect() // all state and props
    // useEffect(() => "do something" , []) // no state or props , runs onces
    // useEffect(() => "anything " , [state , props])

      return (
          <div>
              <h2>Test Compo</h2>
              <p>{count}</p>
              <button onClick={() => setCount(count + 1)}>
                  test count
              </button>
          </div>
      )
}

export default TestEffects


// cleanup prevents memory leak in react
// imagine you write an effect component that doesn't get
// cleanup, your client need to navigates back and forth to the component
// X times. Now, we have got X times function all running the same effect
// over and over again. thats causes memory leak because you just increase the power and memory needed to run that component/function 
