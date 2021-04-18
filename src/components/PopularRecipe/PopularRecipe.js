import React from 'react';
import './PopularRecipe.css';
import PopularRecipeItem from './PopularRecipeItem';

function PopularRecipe() {
    return (
        <div className="popular-recipe">
            <div className="container">
                <div className="popular-recipe-title">Polecane przepisy</div>
                <div className="popular-recipe-items">
                    <PopularRecipeItem src="img/przepis-1.jpg" title="title" category="deser" />
                    <PopularRecipeItem src="img/przepis-6.jpg" title="title" category="deser" />
                    <PopularRecipeItem src="img/przepis-4.jpg" title="title" category="deser" />
                    <PopularRecipeItem src="img/przepis-5.jpg" title="title" category="deser" />
                    <PopularRecipeItem src="img/przepis-6.jpg" title="title" category="deser" />
                    <PopularRecipeItem src="img/przepis-7.jpg" title="title" category="deser" />
                    <PopularRecipeItem src="img/przepis-8.jpg" title="title" category="deser" />
                    <PopularRecipeItem src="img/przepis-4.jpg" title="title" category="deser" />
                    <PopularRecipeItem src="img/przepis-5.jpg" title="title" category="deser" />
                    <PopularRecipeItem src="img/przepis-6.jpg" title="title" category="deser" />
                </div>
            </div>
        </div>
    )
}

export default PopularRecipe
