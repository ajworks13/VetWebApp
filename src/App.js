import React from 'react'
import './App.css';
//import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Container from './components/Container';
import SignUp from './components/pages/SignUp';
import LogIn from './components/pages/LogIn';
import HomePage from './components/pages/HomePage'
import Account from './components/pages/Account'
import Settings from './components/pages/Settings'


//HOT KEYs for productiveness:
// ALT+SHIFT+ DOWN | UP arrow     to copy line.
// ALT+Z    for soft wrap
// SHIFT+TAB     to tab backwards
//-----------------------------------------------

// Make MainMenu, Account, Settings, HospitalInfo

function App() {
  return (
    <>
      <Router>
        <Switch>
          {/* <Route path='/' exact component={Container}/> */}
          <Route path='/' exact component={SignUp}/>
          <Route path='/LogIn' component={LogIn}/>
          <Route path='/HomePage' component={HomePage}/>
          <Route path='/Account' component={Account}/>
          <Route path='/Settings' component={Settings}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
