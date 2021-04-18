import React from 'react';
import './PopularCoffee.css';
import PopularCoffeeItem from './PopularCoffeeItem';

function PopularCoffee() {
    return (
        <div className="popular-coffee">
            <div className="container">
                <div className="popular-coffee-title"> Polecane kawy </div>
                <div className="popular-coffee-items">
                    <PopularCoffeeItem src="img/kawa-1.jpg" title="Kawa" category="Deser" />
                    <PopularCoffeeItem src="img/kawa-2.jpg" title="Kawa" category="Deser" />
                    <PopularCoffeeItem src="img/kawa-3.jpg" title="Kawa" category="Deser" />
                    <PopularCoffeeItem src="img/kawa-2.jpg" title="Kawa" category="Deser" />
                    <PopularCoffeeItem src="img/kawa-1.jpg" title="Kawa" category="Deser" />
                </div>
            </div>
        </div>
    )
}

export default PopularCoffee;
