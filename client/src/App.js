import React, { Component } from 'react';
import './css/index.css';
import { Route } from 'react-router-dom';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Portfolio from './Pages/Portfolio';
import Blog from './Pages/Blog';
import Menu from './Components/Menu';

class App extends Component {

  render() {

    return (
      <div className="App">
        <header className="App-header">

        <Route exact path = '/' component = {Home} />
        <Route path = '/Contact' component = {Contact} />
        <Route path = '/Portfolio' component = {Portfolio} />
        <Route path = '/Blog' component = {Blog} />

        <Menu />

        </header>
      </div>
    );
  }
}

export default App;
