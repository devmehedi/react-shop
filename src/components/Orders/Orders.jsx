import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import './Orders.css'
import Review from '../Review/Review';
import { deleteShoppingCart, removeFromDb } from '../utilities/fakedb';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard } from '@fortawesome/free-solid-svg-icons';

const Orders = () => {
    const savedCart = useLoaderData();
    const [cart, setCart] = useState(savedCart);

    const handleRemoveFromCart = (id)=>{
        const remaining = cart.filter(product =>product.id !== id);
        setCart(remaining)
        removeFromDb(id)
    }

    const handleClearCart = ()=>{
        setCart([]);
        deleteShoppingCart()
    }

    return (
        <div className='shop-container'>
            <div>
                {
                    cart.map(product=><Review
                    key={product.id}
                    product={product}
                    handleRemoveFromCart={handleRemoveFromCart}
                    ></Review>)
                }
            </div>
            <div className="cart-container">
                <Cart
                 cart={cart}
                 handleClearCart={handleClearCart}
                 >
                    <Link to="/checkout">
                        <button className='btn-checkout'>Proceed Checkout <FontAwesomeIcon icon={faCreditCard} /></button>
                    </Link>
                 </Cart>
            </div>
        </div>
    );
};

export default Orders;