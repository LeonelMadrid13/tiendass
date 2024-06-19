import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <img src="public/images/logo.png" alt="IXO Logo" />
            </div>
            <nav>
                <ul>
                    <li><a href="#home">Inicio</a></li>
                    <li><a href="#products">Productos</a></li>
                    <li><a href="#about">Sobre Nosotros</a></li>
                    <li><a href="#contact">Contacto</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
