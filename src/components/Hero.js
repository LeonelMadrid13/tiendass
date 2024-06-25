import React from 'react';
import './Hero.css';

const Hero = () => {

    return (
        <section className="hero">
            <div className="titleText">
                <h1>IXO</h1>
                {/* <p>Bienvenido a nuestra tienda</p> */}
                <button onClick={event => window.location.href = '/#products'} >Explorar Productos</button>
            </div>
            <img src='images/image-backround.jpg' alt="Doña con patas" className='backgroundImagePatas' />
            <img src='images/MorraConGorra.png' alt='Morra con gorra' className="backgroundImageGorra" />
            <img src='images/Billetede20.jpg' alt='Billete de 20 dolares' className="Billete" />
        </section>
    );
};

export default Hero;
