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
