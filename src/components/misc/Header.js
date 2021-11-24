import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => (
    <React.Fragment>
        <header className="bg-image">
            <div className="bg-container">
                <h1>Especialista em Direitos Cíveis</h1>
                <h2>Precisando de ajuda?</h2>
                <Link to="/">Fale agora</Link>
            </div>
        </header>
    </React.Fragment>
);

export default Header;