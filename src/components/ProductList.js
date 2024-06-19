import React from 'react';
import Product from './Product';
import './ProductList.css';

const products = [
    {
        images: [
            'images/playera-1-1.jpg',
            'images/playera-1-2.jpg',
            'images/playera-1-3.jpg',
            'images/playera-1-4.jpg',
            'images/playera-1-5.jpg',
            'images/playera-1-6.jpg',
            'images/playera-1-7.jpg',
            'images/playera-1-8.jpg',
        ],
        name: 'Playera 1',
        identifier: "Playera1",
        price: 20
    },
    {
        images: [
            'images/playera-2-1.jpg',
            'images/playera-2-2.jpg',
            'images/playera-2-3.jpg',
            'images/playera-2-4.jpg',
            'images/playera-2-5.jpg',
            'images/playera-2-6.jpg',
            'images/playera-2-7.jpg',
            'images/playera-2-8.jpg',
        ],
        name: 'Playera 2',
        identifier: "Playera2",
        price: 20
    },
    {
        images: [
            'images/playera-3-1.jpg',
            'images/playera-3-2.jpg',
            'images/playera-3-3.jpg',
            'images/playera-3-4.jpg',
            'images/playera-3-5.jpg',
            'images/playera-3-6.jpg',
            'images/playera-3-7.jpg',
            'images/playera-3-8.jpg',
        ],
        name: 'Playera 3',
        identifier: "Playera3",
        price: 20
    },
    {
        images: [

            'images/playera-4-5.jpg',
            'images/playera-4-6.jpg',
            'images/playera-4-7.jpg',
            'images/playera-4-8.jpg',
            'images/playera-4-1.jpg',
            'images/playera-4-2.jpg',
            'images/playera-4-3.jpg',
            'images/playera-4-4.jpg',
        ],
        name: 'Playera 4',
        identifier: "Playera4",
        price: 20
    },
    {
        images: [
            'images/playera-5-1.jpg',
            'images/playera-5-2.jpg',
            'images/playera-5-3.jpg',
            'images/playera-5-4.jpg',
            'images/playera-5-5.jpg',
            'images/playera-5-6.jpg',
            'images/playera-5-7.jpg',
            'images/playera-5-8.jpg',
        ],
        name: 'Playera 5',
        identifier: "Playera5",
        price: 20
    },
    {
        images: [
            'images/playera-6-1.jpg',
            'images/playera-6-2.jpg',
            'images/playera-6-3.jpg',
            'images/playera-6-4.jpg',
            'images/playera-6-5.jpg',
            'images/playera-6-6.jpg',
            'images/playera-6-7.jpg',
            'images/playera-6-8.jpg',
        ],
        name: 'Playera 6',
        identifier: "Playera6",
        price: 20
    },
    {
        images: [
            'images/gorra-blanca-1.jpg',
            'images/gorra-blanca-2.jpg',
            'images/gorra-blanca-3.jpg',
            'images/gorra-blanca-4.jpg',
            'images/gorra-blanca-5.jpg',
            'images/gorra-blanca-6.jpg',
            'images/gorra-blanca-7.jpg',
            'images/gorra-blanca-8.jpg',
        ],
        name: 'Gorra Blanca',
        identifier: "GorraBlanca",
        price: 20
    },
];

const ProductList = ({ addToCart }) => {
    return (
        <section id="products" className="products">
            <h2>Nuestros Productos</h2>
            <div className="product-grid">
                {products.map((product, index) => (
                    <Product
                        key={index}
                        images={product.images}
                        name={product.name}
                        price={product.price}
                        addToCart={addToCart}
                        identifier={product.identifier}
                    />
                ))}
            </div>
        </section>
    );
};

export default ProductList;
