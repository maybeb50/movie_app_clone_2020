import React, { Component } from 'react';
import './App.css';
import { HashRouter, Route } from 'react-router-dom';
import About from './routes/About';
import Home from './routes/Home';
import Navigation from './components/Navigation';

class App extends Component {
  render() {
    return(
      <HashRouter>
        <Navigation />
        <Route path="/" exact={true} component={Home} />
        <Route path="/About" component={About} />
      </HashRouter>
    );
  }
}

export default App;
