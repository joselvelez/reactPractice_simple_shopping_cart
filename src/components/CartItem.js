import React from 'react';
import './CartItem.css';

function CartItem(props) {
    return(
        <div className="CartItem">
            <div className="CartItemName">
                {props.name}
            </div>
            <div className="CartItemPrice">
                {props.price}
            </div>
            <div className="CartItemQty">
                {props.qty}
            </div>
        </div>
    );
}

export default CartItem;