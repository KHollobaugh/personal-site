import React, { Component } from 'react';
import projectData from '../data/projectData';
import ProjectDisplay from '../Components/ProjectDisplay';

class Portfolio extends Component {
    constructor() {
      super();
      this.state={
        projects: [],
      }
    }
  
    componentDidMount() {
      setTimeout(() => {
        this.setState({
          projects: projectData,
        });
      }, 0);
    }

    render(){
    return (
        <div className="portfolio-page">
          <h1>Projects</h1>
          <a href="https://github.com/KHollobaugh/personal-site"
          target="_blank"
          rel="noopener noreferrer"
          className="top-link">
          View this site's code</a>
      <ProjectDisplay projects={this.state.projects}/>
        </div>
    )
}
}


export default Portfolio;