import React, { Component } from 'react';
import './css/index.css';
import { Route } from 'react-router-dom';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Portfolio from './Pages/Portfolio';
import Blog from './Pages/Blog';
import Menu from './Components/Menu';


document.body.classList.add('app-background');


class App extends Component {

  render() {

    return (
      <div className="App">

      <div className="header">
      <button>Activate Night Mode</button>
      </div>
      <div className="content">

        <div className="routes">
        <Route
        exact
        path="/"
        component={Home}
        />
        <Route
        path="/Contact"
        component={Contact}/>
        <Route
        path="/Portfolio"
        component={Portfolio}/>
        <Route
        path="/Blog"
        component={Blog}/>
        </div>

        <Menu />

        </div>
      </div>
    );
  }
}

export default App;
