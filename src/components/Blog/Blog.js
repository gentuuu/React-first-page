import React from 'react';
import './Blog.css';
import BlogItem from './BlogItem';

function Blog() {
    return (
        <div className="article">
            <div className="container">
                <div className="article-title">Artykuły</div>
                <div className="article-items">
                    <BlogItem src="img/przepis-6.jpg" title="Lorem ipsum" />
                    <BlogItem src="img/przepis-4.jpg" title="Lorem ipsum" />
                    <BlogItem src="img/przepis-5.jpg" title="Lorem ipsum" />
                </div>
            </div>
        </div>
    )
}

export default Blog;


