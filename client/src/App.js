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
  constructor(props) {
    super(props);
    this.state = {
        dark: false
    };
    this.toggleClass = this.toggleClass.bind(this);
}

toggleClass() {
  const currentState = this.state.dark;
  this.setState({ dark: !currentState });
  console.log('dark mode');
};



  render() {
    return (
      <div className={this.state.dark ? 'dark App': "App"}>

      <div className="header">
      <button 
      onClick={this.toggleClass}
      >Dark Mode</button>
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
