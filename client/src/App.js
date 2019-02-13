import React, { Component } from 'react';
import './css/index.css';
import { Route, Switch } from 'react-router-dom';
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
        dark: false,
        stars: false
    };
    this.toggleDark = this.toggleDark.bind(this);
    this.toggleStars = this.toggleStars.bind(this);
}

toggleDark() {
  const currentState = this.state.dark;
  this.setState({ dark: !currentState });
};
toggleStars() {
  const currentStars = this.state.stars;
  this.setState({ stars: !currentStars });
  console.log(this.state.stars, 'stars');
};
  render() {
    return (
      <div className={this.state.dark ? 'dark App': 'App'}>

      <div className="header">
      
      <button className="dark-mode"
      onClick={this.toggleDark}
      >Dark Mode <i className="far fa-moon"></i></button>
      <button className="light-mode"
      onClick={this.toggleDark}
      >Light Mode <i className="fas fa-lightbulb"></i></button>


      {/* <button className="stars-on"
      onClick={this.toggleStars}
      >Go Stargazing<i className="fas fa-lightbulb"></i></button>
      <button className="stars-off"
      onClick={this.toggleStars}
      >Remove Stars<i className="fas fa-lightbulb"></i></button> */}

      </div>
      <div className="content">

        <div className="routes">
        <Switch>
        <Route
        exact
        path="/"
        component={Home}
        />
        <Route
        path="/contact"
        component={Contact}/>
        <Route
        path="/portfolio"
        component={Portfolio}/>
        <Route
        path="/blog"
        component={Blog}/>
        <Route path="/readinglist"
        component={ReadingList}/>
        </Switch>
        </div>

        <Menu />

        </div>
      </div>
    );
  }
}

export default App;
