import React, { useState, useEffect } from 'react';
import './Endorser.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { useParams } from 'react-router-dom';

import { products } from '../../assets/products/products';

function Endorser() {

    const { identifier } = useParams()
    let product
    products.forEach(obj => {
        if (obj.identifier === identifier) {
            product = obj
        }
    });

    const [hovered, setHovered] = useState(false);
    const [currentImage, setCurrentImage] = useState(product.images[0]);

    useEffect(() => {
        let interval;
        if (hovered) {
            let index = 1; // Empezamos desde la segunda imagen
            interval = setInterval(() => {
                setCurrentImage(product.images[index]);
                index = (index + 1) % product.images.length;
            }, 750); // Cambiar imagen cada 1 segundo
        } else {
            setCurrentImage(product.images[0]); // Volvemos a la imagen base
        }
        return () => {
            clearInterval(interval);
        };
    }, [hovered, product.images]);

    console.log(process.env.PUBLIC_URL)
    return (
        <div className="App">
            <Header />
            <div className='product-container'>
                <div
                    className="product-item"
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                >
                    <img
                        src={process.env.PUBLIC_URL + currentImage}
                        alt={`${product?.name}`}
                        className={`product-image ${identifier}`}
                    />
                    <div className='product-info'>
                        <h3>{product?.name}</h3>
                        <p>${product?.price}</p>

                        <button onClick={() => { }}>Agregar al Carrito</button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Endorser;
