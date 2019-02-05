import React, { Component } from 'react';
import './css/index.css';
import { Route } from 'react-router-dom';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Portfolio from './Pages/Portfolio';
import Blog from './Pages/Blog';
import Menu from './Components/Menu';
import ReadingList from './Pages/ReadingList';


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
      
      <button class="dark-mode"
      onClick={this.toggleClass}
      >Dark Mode <i class="far fa-moon"></i></button>
      <button class="light-mode"
      onClick={this.toggleClass}
      >Light Mode <i class="fas fa-lightbulb"></i></button>

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
        <Route path="/ReadingList"
        component={ReadingList}/>
        </div>

        <Menu />

        </div>
      </div>
    );
  }
}

export default App;
