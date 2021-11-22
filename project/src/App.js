import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


import Header from './component/Header';

import Home from './pages/Users/Home';
import Pariwisata from './pages/Users/Pariwisata';
import Partisipan from './pages/Users/Partisipan';
import About from './pages/Users/About';

import Auth from './pages/Auth';

import Profile from './pages/Members/Profile';
import Postingan from './pages/Members/Postingan';

export default function App() {

  return (

    <Router>
      <Header />
      <Switch>
       
          <Route path="/Profile" component={Profile} exact />
          <Route path="/Postingan" component={Postingan} exact />
         
          <Route path="/" component={Home} exact />
          <Route path="/Pariwisata" component={Pariwisata} exact />
          <Route path="/Partisipan" component={Partisipan} exact />
          <Route path="/About" component={About} exact />
          <Route path="/Auth" component={Auth} exact />
        

      </Switch>
    </Router>

  );
}
