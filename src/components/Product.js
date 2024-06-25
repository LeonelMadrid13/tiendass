import React, { useState, useEffect } from 'react';
import './Product.css';
import { Link } from 'react-router-dom/dist';

const Product = ({ images, name, price, addToCart, identifier }) => {
    const [hovered, setHovered] = useState(false);
    const [currentImage, setCurrentImage] = useState(images[0]);

    useEffect(() => {
        let interval;
        if (hovered) {
            let index = 1; // Empezamos desde la segunda imagen
            interval = setInterval(() => {
                setCurrentImage(images[index]);
                index = (index + 1) % images.length;
            }, 750); // Cambiar imagen cada 1 segundo
        } else {
            setCurrentImage(images[0]); // Volvemos a la imagen base
        }
        return () => {
            clearInterval(interval);
        };
    }, [hovered, images]);

    return (

        <div
            className="product-item"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <Link to={`endorser/${identifier}`}>
                <img
                    src={currentImage}
                    alt={`${name}`}
                    className={`product-image ${identifier}`}
                />
            </Link>

            <h3>{name}</h3>
            <p>${price}</p>

            <button onClick={() => addToCart({ images, name, price })}>Agregar al Carrito</button>
        </div>

    );
};

export default Product;
