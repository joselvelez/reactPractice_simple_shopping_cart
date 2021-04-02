import React from 'react';
import CartItem from './CartItem';

function Cart({initialData}) {
    return(
        <div className="Cart">
                {initialData.map(item => {
                    return(
                        <CartItem key={item.id} name={item.name} />
                    )
                })}
        </div>
    );
}

export default Cart;