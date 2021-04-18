import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
    return (
        <div className="navigation">
            <div className="container">
                <div className="navigation-wrapper">
                    <Link className="logo" to="/"><img src="" alt="" className="menu-logo"/></Link> 
                    <div className="navigation-content">
                        <div className="navigation-menu">
                            <input type="text" className="navigation__checkbox"/>
                            <label htmlFor="" className="navigation__button">
                                <span className="navigation__icon">&nbsp;</span>
                            </label>
                            <nav className="navigation__nav">
                                <ul className="navigation__list">
                                    <li className="navigation__item">
                                        <Link className="navigation__link" to='/przepisy'>Przepisy</Link>
                                    </li>
                                    <li className="navigation__item">
                                        <Link className="navigation__link" to='/przepisy'>Blog</Link>
                                    </li>
                                    <li className="navigation__item">
                                        <Link className="navigation__link" to='/przepisy'>Kawa</Link>
                                    </li>
                                    <li className="navigation__item">
                                        <Link className="navigation__link" to='/przepisy'>Kontakt</Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar;


