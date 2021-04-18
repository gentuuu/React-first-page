import React from 'react';
import { Link } from 'react-router-dom';

function PopularCoffeeItem(props) {
    return (
        <Link className="popular-coffee-item"> 
            <div className="popular-coffee__img">
                <img src={props.src} alt=""/>
            </div>
            <div className="popular-coffee__title">
                {props.title}
            </div>
            <div className="popular-coffee__category">
                {props.category}
            </div>
            <div className="popular-coffee__btn"><img src="img/arrow-right-recipe.png" alt=""/></div>
        </Link>
    )
}

export default PopularCoffeeItem;
