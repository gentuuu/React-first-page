import React from 'react';
import { Link } from 'react-router-dom';

function MainRecipeitem(props) {
    return (
        <Link className="recipe-left-item" to={props.path}>
            <div className="recipe-left-item__img">
                <img src={props.src} alt=""/>
            </div>
            <div className="recipe-left-item__text">
                <div className="recipe-left-item__text-title">{props.title}</div>
                <div className="recipe-left-item__text-text">{props.text}</div>
            </div>
        </Link>
    )
}

export default MainRecipeitem;

