import React from 'react';
import './MainCategory.css';
import { Link } from 'react-router-dom';



function MainCategoryItem(props) {
    return (
        <Link to={props.path} className="category-item">
            <div className="category-item__img">
                <img src={props.src} alt=""/>
            </div>
            <div className="category-item__title">{props.title}</div>
            <div className="category-item__all">{props.recipe} przepisów</div>
        </Link>
       
    )
}

export default MainCategoryItem;

