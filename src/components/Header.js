import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <a href='/'><img src="images\logo.PNG" alt="IXO Logo" /></a>
            </div>
            <nav>
                <ul>
                    <li><a href="/">Inicio</a></li>
                    <li><a href="#products">Productos</a></li>
                    <li><a href="#cart">Carrito</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
