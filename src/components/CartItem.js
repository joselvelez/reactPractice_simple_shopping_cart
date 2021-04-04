import React from 'react';
import './CartItem.css';

function CartItem(props) {

    // Instead of passing the updateQty function from the parent
    // component into the CartItem component, make a function
    // for adding/subtracting from qty here and pass into the
    // respective button
    const addOne = () => props.updateQty(props.id, props.qty + 1);
    const subOne = () => props.updateQty(props.id, props.qty - 1);

    return(
        <div className="CartItem">
            <div className="CartItemName">
                {props.name}
            </div>
            <div className="CartItemPrice">
                ${props.price.toFixed(2)}
            </div>
            <div className="CartItemQty">
                <button onClick={addOne}>+</button>
                {` ${props.qty} `}
                <button onClick={subOne} disabled={props.qty < 1}>-</button>
            </div>
            <div className="CartItemSubtotal">
                Total: ${(props.qty * props.price).toFixed(2)}
            </div>
        </div>
    );
}

export default CartItem;