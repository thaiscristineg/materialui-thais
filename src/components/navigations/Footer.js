import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import { FaInstagram, FaLinkedin } from 'react-icons/fa';

const Social = [
    {
        url: "https://www.linkedin.com/miguelsantosgomes90815",
        icon: <FaLinkedin size={23}/>,
    },
    {
        url: "https://www.instagram.com/miguelgomes.adv/",
        icon: <FaInstagram size={23}/>,
    }
]
const MenuBar = () => (
    <footer className="footer">
        <div className="div-footer">
            <div className="menu-footer">
                <ul className="ul-menu-footer">
                    <li className="li-menu-footer"><Link to="/">Home</Link></li>
                    <li className="li-menu-footer"><Link to="/about">Sobre</Link></li>
                    <li className="li-menu-footer"><Link to="/contact">Contato</Link></li>
                </ul>
                <p className="copyright-footer">&copy; 2021 por Miguel dos Santos Gomes Advocacia. Todos os direitos reservados</p>

            </div>    
            <div className="social-footer">
                { 
                    Social.map(s => (
                        <a href={s.url} target="_blank">{s.icon}</a>
                    ))
                }
                    
            </div>
        </div>        
        
    </footer>
);

export default MenuBar;