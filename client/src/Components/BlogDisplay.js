import React from 'react';
import BlogCard from './BlogCard';

const BlogDisplay = props => {
    return (
        <div className='blog-display'>
        {props.articles.map((article, index) =>
        <BlogCard 
        key={index}
        article={article}
        />
        )}  
        </div>
    )
}
export default BlogDisplay;