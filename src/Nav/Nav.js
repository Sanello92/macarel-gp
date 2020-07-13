import React from "react";
import {NavLink} from "react-router-dom";
import './nav.css';

function Nav () {
    return (
        <nav className="menu-bar">
            <div className="container">
                <div className="row">
                    <div className="col-xl-2">
                        <img className="navBar-logo" src="/img/navBar-logo.png" alt="Логотип"/>
                    </div>
                    <div className="col-xl-8 ml-auto align-self-center">
                        <ul className="menu d-flex justify-content-end">
                            <li className="menu__item"><NavLink to="/">Головна</NavLink></li>
                            <li className="menu__item"><NavLink to="/SpongeCakes">Бісквітні торти</NavLink></li>
                            <li className="menu__item"><NavLink to="/Macarons">Макаронс</NavLink></li>
                            <li className="menu__item"><NavLink to="/CandyBar">Кенді бар</NavLink></li>
                            <li className="menu__item"><NavLink to="/MousseCakes">Мусові торти</NavLink></li>
                            <li className="menu__item"><img src="/img/search.png" alt="Пошук"/></li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Nav;