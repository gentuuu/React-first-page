import React from 'react';
import {Link} from 'react-router-dom';

function PopularRecipeItem(props) {
    return (
       <Link className="recipe-item" to="">
           <div className="recipe-item__img">
               <img src={props.src} alt=""/>
               <div className="recipe-item__category">
               <div className="recipe-item__category-item">{props.category}</div>
           </div>
           </div>
          
           <div className="recipe-item__title">{props.title}</div>
       </Link>
    )
}

export default PopularRecipeItem;
