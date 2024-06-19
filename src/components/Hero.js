import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            <div class="titleText">
                <h1>IXO</h1>
                {/* <p>Bienvenido a nuestra tienda</p> */}
                <button>Explorar Productos</button>
            </div>
            <img src='images/image-backround.jpg' alt="Doña con patas" class='backgroundImagePatas' />
            <img src='images/MorraConGorra.png' alt='Morra con gorra' class="backgroundImageGorra" />
            <img src='images/Billetede20.jpg' alt='Billete de 20 dolares' class="Billete" />
        </section>
    );
};

export default Hero;
