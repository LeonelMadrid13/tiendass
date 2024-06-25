import React from 'react';
import Product from './Product';
import { products } from '../assets/products/products'
import './ProductList.css';

const ProductList = ({ addToCart }) => {
    return (
        <section id="products" className="products">
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
