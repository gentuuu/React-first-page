import React from 'react';
import './MainCategory.css';
import MainCategoryItem from './MainCategoryItem';

function MainCategory() {
    return (
        <div className="category">
            <div className="container">
                <div className="category-items">
                  <MainCategoryItem src="img/kategoria-1.jpg" title="Na ciepło" recipe="5"/>
                  <MainCategoryItem src="img/kategoria-1.jpg" title="Deser" recipe="20"/>
                  <MainCategoryItem src="img/kategoria-1.jpg" title="Śnadanie" recipe="6"/>
                  <MainCategoryItem src="img/kategoria-1.jpg" title="Na zimno" recipe="9"/>
                </div>
            </div>
            
        </div>
    )
}

export default MainCategory;


