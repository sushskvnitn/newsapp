import './App.css';

import React, { useState } from 'react'
import NavBar from './components/Navbar';
import News from './components/News';
// import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App = ()=> {
  const pageSize = 5;
  const [progress, setProgress] = useState(0)
 
    return (
      <div>
//         <Router>
        <NavBar/> 
        <LoadingBar
        height={3}
        color='#f11946'
        progress={progress} 
      />
        <Switch>
          <li  path="/"><News setProgress={setProgress} key="general" pageSize={pageSize} country="in" category="general"/></li> 
          <li  path="/business"><News setProgress={setProgress} key="business" pageSize={pageSize} country="in" category="business"/></li> 
          <li  path="/entertainment"><News setProgress={setProgress} key="entertainment" pageSize={pageSize} country="in" category="entertainment"/></li> 
          <li  path="/general"><News setProgress={setProgress} key="general" pageSize={pageSize} country="in" category="general"/> </li> 
          <li  path="/health"><News setProgress={setProgress} key="health" pageSize={pageSize} country="in" category="health"/></li> 
          <li  path="/science"><News setProgress={setProgress} key="science" pageSize={pageSize} country="in" category="science"/> </li> 
          <li path="/sports"><News setProgress={setProgress} key="sports" pageSize={pageSize} country="in" category="sports"/></li>  
          <li  path="/technology"><News setProgress={setProgress} key="technology" pageSize={pageSize} country="in" category="technology"/> </li> 
        </Switch>
//         </Router>
      </div>
    )
 
}

export default App;
