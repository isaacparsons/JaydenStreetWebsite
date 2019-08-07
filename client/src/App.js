import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";

import Header from './Components/Header';
import Home from './Screens/Home'

import './App.css';

import Context from './Context/Context'


import About from './Screens/About'
import Merch from './Screens/Merch'
import Contact from './Screens/Contact'


function App() {
  return (
    <Context.Provider value = {"HELLO"}>
      <Router>
        <div>
          <Header/>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/merch" component={Merch} />
          <Route path="/contact" component={Contact} />
        </div>
      </Router>
    </Context.Provider>

  );
}

export default App;
