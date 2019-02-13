import React, { Component } from 'react';
import blogData from '../data/blogData';
import BlogDisplay from '../Components/BlogDisplay';
import {NavLink} from 'react-router-dom';

class Blog extends Component {
    constructor() {
      super();
      this.state={
        articles: [],
      }
    }
  
    componentDidMount() {
      setTimeout(() => {
        this.setState({
          articles: blogData,
        });
      }, 0);
    }

    render(){
    return (
        <div className="blog-page">
          <h1>Recent Articles</h1>
      <BlogDisplay articles={this.state.articles}/>
        <NavLink className="reading-button" to={`/readinglist`}>
          View My Reading List
        </NavLink>

        </div>
    )
}
}


export default Blog;