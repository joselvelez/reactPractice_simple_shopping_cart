import React from 'react';

function CartItem(props) {
    return(
        <div className="CartItem">
            <h4>Cart Items</h4>
            {props.name}
        </div>
    );
}

export default CartItem;