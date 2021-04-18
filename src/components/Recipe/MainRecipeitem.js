import React from 'react';
import { Link } from 'react-router-dom';

function MainRecipeitem(props) {
    return (
        <Link className="recipe-item" to="">
            <div className="recipe-item__img">
                <img src={props.src} alt=""/>
                <div className="recipe-item__category">
                    <div className="recipe-item__category-item">Mrożona</div>
                    <div className="recipe-item__category-item">Deser</div>
                </div>
                <div className="recipe-item__hover">
                    <div className="recipe-item__hover-items">
                        <div className="recipe-item__hover-item lavel">
                            <img src="" alt=""/>
                            <p>Łatwy</p>
                        </div>
                        <div className="ecipe-item__hover-item time">
                            <img src="" alt=""/>
                            <p>10 min</p>
                        </div>
                        <div className="recipe-item__hover-item person">
                            <img src="" alt=""/>
                            <p>2 osoby</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="recipe-item__title">
                Lorem ipsum
            </div>
        </Link>
    )
}

export default MainRecipeitem;


