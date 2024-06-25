import React, { useState, useEffect } from 'react';
import './Endorser.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useParams } from 'react-router-dom';

import { products } from '../assets/products/products';

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

    const customStyles = {
        control: (provided) => ({
            ...provided,
            background: 'transparent',
            display: 'flex',
            flexWrap: 'nowrap',
            borderColor: 'hsl(0deg 78.56% 55.56%);',
            width: '7em'
        }),
        menu: (provided) => ({
            ...provided,
            background: 'transparent',
            width: '4em'
        }),
    };

    return (
        <div className="Endorser">
            <Header />
            <div className='endorser-container'>
                <div
                    className="endorser-item"
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                >
                    <img
                        src={process.env.PUBLIC_URL + currentImage}
                        alt={`${product?.name}`}
                        className={`endorser-image ${identifier}`}
                    />
                </div>
                <div className='endorcer-info'>
                    <h3>{product?.name}</h3>
                    <p>${product?.price}</p>
                    <button onClick={() => { }}>Add to cart</button>
                    <label className='sizeSelect'>
                        Select size:
                        <select name="selectedSize">
                            <option value="sm">S</option>
                            <option value="m">M</option>
                            <option value="l">L</option>
                            <option value="xl">XL</option>
                            <option value="xxl">XXL</option>
                        </select>
                    </label>
                </div>
            </div>
            <Footer />
        </div >
    );
}

export default Endorser;
