// we are consuming to libs: React and ReactDOM 
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router } from "react-router-dom"
import './index.css';
import App from './App';






// all the react element will be injected in this root element.
// we can call the anchor point
// the down code will be done once per app but most of the work would be in the app in many many components 
const rootElement = document.getElementById("root")
ReactDOM.render(
<Router>
  <App />
</Router>
,rootElement
);

