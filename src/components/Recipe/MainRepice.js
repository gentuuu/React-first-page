import React from 'react';
import './MainRecipe.css';
import MainRecipeSidebar from './MainRepiceSidebar';
import MainRecipeItems from './MainRecipeItems';

function MainRepice() {
    return (
        <div className="recipe">
            <div className="container">
                <div className="recipe-content">
                    <MainRecipeSidebar />
                    <MainRecipeItems />
                </div>
            </div>
        </div>
    )
}

export default MainRepice;
