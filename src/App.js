import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductList from './components/ProductList';
import Footer from './components/Footer';
import Cart from './components/Cart';

function App() {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product) => {
        setCartItems([...cartItems, product]);
    };

    const removeFromCart = (index) => {
        const newCartItems = cartItems.filter((_, i) => i !== index);
        setCartItems(newCartItems);
    };

    return (
        <div className="App">
            <Header />
            <Hero />
            <ProductList addToCart={addToCart} />
            <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
            <Footer />
        </div>
    );
}

export default App;
