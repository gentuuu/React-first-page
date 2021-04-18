import React from 'react';
import MainRecipeItem from './MainRecipeitem';

function MainRecipeItems() {
    return (
        <div className="recipe-right">
            <div className="recipe-right-primary">Przepisy</div>
            <div className="recipe-right-items">
                <MainRecipeItem src="img/przepis-1.jpg"/>
                <MainRecipeItem src="img/przepis-4.jpg"/>
                <MainRecipeItem src="img/przepis-5.jpg"/>
                <MainRecipeItem src="img/przepis-6.jpg"/>
                <MainRecipeItem src="img/przepis-7.jpg"/>
                <MainRecipeItem src="img/przepis-8.jpg"/>
            </div>
        </div>
    )
}

export default MainRecipeItems;

