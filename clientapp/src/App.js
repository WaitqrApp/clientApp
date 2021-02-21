import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import Welcome from './components/Welcome';
import MenuDigital from './components/MenuDigital.js';
import DetallePlatillo from './components/DetallePlatillo';
/* Describe el contenido del canvas central */
function App() {

  return (
        <Router>
          <Switch>
            <Route exact path="/" component={Welcome} />
            <Route exact path="/MenuDigital" component={MenuDigital} />
            <Route exact path="/DetallePlatillo" component={DetallePlatillo} />
          </Switch>
        </Router>
  );
}

export default App;