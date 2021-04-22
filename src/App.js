import React from 'react';
// import logo from './logo.svg';
 import './App.css';
//  import './Style1.css'
 import Form from './Components/Forms'
 import AppBar from './Components/AppBars'
 import WeeklyTest from './Components/WeeklyTests'
 import Button from './Components/Button'
 import TestInfo from './Components/TestInfos'
 import TestButton from './Components/TestButtons'
 import TestInstruction from './Components/TestInstructions'
 import QBank from './Components/QBanks'
//  import Questions from './Components/Questions'
//  import Timer from './Components/Timer'
//  import StudentReview from './Components/StudentReview'

import { BrowserRouter,Switch,Route,Link } from 'react-router-dom';




function App() {
  return (
      <div>
    
    <BrowserRouter>
        <Switch>
          <Route path='/' component={Form} exact={true}/>
          <Route path='/AppBar' component={AppBar}/>
          <Route path='/WeeklyTest' component={WeeklyTest}/>
          <Route path='/TestInfo' component={TestInfo}/>
          <Route path='/Button' component={Button}/>
          <Route path='/TestButton' component={TestButton}/>
          <Route path='./TestInstruction' component={TestInstruction}/>
          <Route path='/QBank' component={QBank}/>
           {/* <Route path='/Questions' component={Questions}/> */}

        </Switch>
        </BrowserRouter>
        
      </div>
   
  );
}

export default App;
