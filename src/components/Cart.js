import React from 'react';
import './Cart.css';

const Cart = ({ cartItems = [], removeFromCart }) => {
    const total = cartItems.reduce((acc, item) => acc + item.price, 0);

    return (
        <div className="cart">
            <h2>Carrito de Compras</h2>
            {cartItems.length === 0 ? (
                <p>El carrito está vacío</p>
            ) : (
                <div>
                    {cartItems.map((item, index) => (
                        <div key={index} className="cart-item">
                            <img src={item.image} alt={item.name} />
                            <div>
                                <h3>{item.name}</h3>
                                <p>${item.price}</p>
                                <button onClick={() => removeFromCart(index)}>Eliminar</button>
                            </div>
                        </div>
                    ))}
                    <h3>Total: ${total}</h3>
                    <button className="checkout-button">Proceder al Pago</button>
                </div>
            )}
        </div>
    );
};

export default Cart;
