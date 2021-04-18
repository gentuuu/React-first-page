import React from 'react';
import {Link} from 'react-router-dom';

function BlogItem(props) {
    return (
        <Link className="article-item" to={props.path}> 
            <div className="article-item__img">
                <img src={props.src} alt=""/>
            </div>
            <div className="article-item__title">
                {props.title}
            </div>
        </Link>
    )
}

export default BlogItem;


