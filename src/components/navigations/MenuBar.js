import React from "react";
import "./MenuBar.css";
import LogoMiguel from "../../images/LogoMiguel.png";


const MenuBar = () => (
    <nav className="header">
        <div className="nav-wrapper">
            <a className="logo" href="/">
                <img src={LogoMiguel } />            
            </a>
            <input className="menu-btn" type="checkbox" id="menu-btn"/>
            <label className="menu-icon" htmlFor="menu-btn"><span></span></label>

            <ul className="menu">
                <li><a href="/">Home</a></li>
                <li><a href="/about">Sobre</a></li>
                <li><a href="/contact">Contato</a></li>
            </ul>
        </div>
    </nav>
);

export default MenuBar;