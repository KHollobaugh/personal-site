import React from 'react';
import BlogCard from './BlogCard';

const BlogDisplay = props => {
    return (
        <div className='Blog'>
        
        <h1>Articles</h1>

        <div className='card-container'>
        {props.articles.map((article, index) =>
        <BlogCard 
        key={index}
        article={article}
        />
        )}  
        </div>
        </div>
    )
}
export default BlogDisplay;