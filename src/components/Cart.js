import React from 'react';
import CartItem from './CartItem';
import './Cart.css';

function Cart({initialData}) {
    return(
        <div className="Cart">
            <h4>Cart Items</h4>
            {initialData.map(item => {
                return(
                    <div key={item.id}>
                        <CartItem name={item.name} price={item.price} qty={item.qty} />
                    </div>
                )
            })}
        </div>
    );
}

export default Cart;