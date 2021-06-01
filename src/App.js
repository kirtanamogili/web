import './App.css';
import React from 'react';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Resume from './components/pages/Resume'
import Projects from './components/pages/Projects'
import Contact from './components/pages/Contact'

function App() {
  return (
    <div className="App">
      <Router basename="/web" >
        <Navbar/>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/Resume' component={Resume}/>
          <Route path='/Projects' component={Projects}/>
          <Route path='/Contact' component={Contact}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
