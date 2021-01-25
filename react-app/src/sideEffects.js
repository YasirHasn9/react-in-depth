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