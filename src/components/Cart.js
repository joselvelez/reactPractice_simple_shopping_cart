import React, { useState, useEffect } from 'react';
import CartItem from './CartItem';
import './Cart.css';

function Cart({initialData}) {

    // Set initial state
    const initialState = JSON.parse(window.localStorage.getItem('items'));

    // Set state for items in cart
    const [items, setItems] = useState(initialState || initialData);

    // Add local storage for data persistence using
    // React Hook useEffect. Leverage the  dependency
    // array that useEffect has to update localstorage
    // only when state of items changes.
    useEffect( () => {
        window.localStorage.setItem('items', JSON.stringify(items))
    }, [items]);

    // Helper function to calculate grand total
    const grandTotal = items.reduce((total, item) => {
        return total + (item.price * item.qty);
    }, 0).toFixed(2) 

    // Function to update quantity that gets passed down to
    // the child component, CartItem, as props.
    const updateQty = (itemId, newQty) => {
        // Create a copy of the initial state to update it.
        // One should never mutate the original state. React
        // needs it to compare changes.
        let newItems = items.map(item => {
            if (itemId === item.id) {
                return {...item, qty: newQty};
            }
            return item;
        });

        setItems(newItems);
        }

    return(
        <div className="Cart">
            <h4>Cart Items</h4>
            <div className="CartItems">
                {items.map(item => {
                    return <CartItem key={item.id} {...item} updateQty={updateQty} />
                })}
            </div>
            <div className="GrandTotal">
                Grand Total: ${grandTotal}
            </div>
        </div>
    );
}

export default Cart;