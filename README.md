# react-in-depth
 A project for practicing theories and anything new I know about React


What is react?
simple enough, React is UI library and NOT a framework. It is built by facebook


what problems does it solve ?
Imagine, you log in into your facebook account and see all the post, feeds, friends, videos and other things. These are states 
and each one of them is associated with a one singe state or more. We could have 100s, 1000s or millions of states which they are 
so complex and thats what the team at facebook was facing so they came up with React

how does it help with complex state ?
React allows for us to write everything in components which this leads to divide our problems into smaller problems 
but why am mentioning problems ?
in software, we cannot have an app with no problems just like life , you merely solved one to jump to another. So we dont starve for an 
app with no issues but we would like to run into good issues , issues that we can spot easily to fix and thats what react do.
React take some data and put them on the screen and it does it very well, render UI.
1. react use component in everything to build the user interfaces
2. single app/ web page has a state for the user to interact with it, this leads the app to be in certain state and requires a transition from one to 
another with out bogging down the browser so react went out and came with the Virtual DOM
what is Virtual DOM ?
its just an engine that takes the code from react and display on the screen, a visual representation for the up with out dealing with the real dom

3. it is not a framework its a library because frameworks have opinions about how to write our files , react take this portion and does for us

4. scalable, reusable and fun to write

5. we can manage the state through react or third library. It is unopinionated 


#---
when the state of the app changes, React will Know that and it will check which specific node have changes and it will update only these nodes. 
This process called the reconciliation and this is also why react is so powerful


#--
The Virtual Dom
It is a simple engine that interact with the actual dom for us. We tell the dom which element to render and will do so. And also will update the dom when the state changes.

The virtual dom will take a picture of the real dom and when something gets changes it will compare this picture with the old one and will update the new one accordingly.

So, it is a comparison of what a dom looked like before and after the state changed and it uses 
the diffing algorithm to determine what node have changed on our browser.



#-- 
@ types of components 
1- stateful which full of logic and the user can interact with the state of it
2- stateless is juts a static components and there is no logic



every thing react at the end is an object 


#--
in 2009 programmers worked on js to make it execute outside the browser
This is a a game changer because now we can send and receive data from our file system . But still rely on third-party bundler like webpack and rollup because these will compile the packs and assign any missing dependencies before sending any data.
babel is a transplier the code for the browser and convert the latest feature of es6 that aren't supported in the browser.



# Side Effects
Side Effects are anything effects something outside the scope of function being executed. like fetching data from an api
, timers , logging and manually manipulate the DOM.

In React's comps: there is 2 types of comp
1. components require cleanup
2. components dont require cleanup
-------------------------------------------

Pure Component: comp with no side effects --> takes the same input , gives the same the output.
check the [useEffect](./react-app/src/sideEffects.js)



Props Checking
-------------
Because js is dynamic and so loose language, when we write something , it is gonna assume that we know what we are doing
this is why we need to check the props in react 

React used to have a built-in lib in its ecosystem but not any more but now we have other extensions for checking type such as `TypeScript` and `Flow`

at this time, we are gonna use a prop-type
install 




## React lifecycle methods
---------------------
It is an important concept to leverage when it comes to writing react. They are necessary in order when we fetch data and render based on that data.


They are 3 phases in react lifecycle birth, growth and death
1. Birth -- Mounting
  a) render is invoked here 
  b) componentDidMount gets called

2. Growth -- Updating
  a) setState can be used here to update the data forcing to call render again
  b) componentShouldUpdate can be used here to stop calling render in necessary

3. Death -- Unmounting
  a) The component is removed from the screen
  b) componentWillUnmount can be used here to clean up the events


`constructor`
its oop basic and it gets called every time a new object is created.
it is also called once only in the initial mounting life-cycle.
here, we can initialize our state
             bind our function that are local to the components(we dont bind with arrow function)

             we can call the special function super() so we can have access to parent props(this.props)

`componentWillMount`
It is like constructor function , it gets called once on the initial mount 
Many engineers uses it to fetch data to expect the data to be available however, this cant done on the client
  a) update state vis this.setState
  b) perform last minute optimization


`What happens when we call setState?`
 setState will merge the object we passed into it into the current state of the component.
 This will lead to cause a process called reconciliation, the goal of it is to update the UI
 based on the new state.
 hows that happening ?
   react will construct a tree of its elements and will diff the new tree to previous one and will update the UI accordingly.


`render`
its required 
could be on multiple phase on mounting and updating 
it is pure component with no side effect
all its care about is the props and state 
display the element of react on the screen.
you can think of the state and render method like a brothers 
if state tells render to render it will do so.

** Note **
lifecycle
constructed
render
side effec -> useEffect/componentDidMount()
##------------------------------------------



Higher Order Components
------------
Simply, it is a component that takes a component as a argument and return a new one
```js 
function HOC = Wrapper => {
    return class extends React.Component {
        render(){
            // in case we have states and we want to share around the components we can easily passed to Wrapper
            return <Wrapper states={whatever} />
        }
    }
}
// now in case, we want the states to be passed to another function 
const Button = props => <button>{props.state}</button>

const ChildComponent = HOC(Button) // easy , right ?
```
I believe, this is how redux and Router are working.
--------------------------------------------------



### useReducer vs useState
Now , when it comes to manage the state in react's functional components , some engineers prefer useReducer hook over useState because with useReducer we can eliminate the code and also useReducer takes the old state and returns a new one 
