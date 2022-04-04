import React from 'react';
import './Order.css';

const Order = (props) => {
    console.log(props);
    const [cart] = [props.cart];
    const reducer = (previous,current)=>{
        return previous + current.quantity;
    }
    const countQuantity = cart.reduce(reducer,0);
   
    return (
        <div>
            <h2>Order Summary</h2>
            <h4>Ordered Items: {countQuantity}</h4>
        </div>
    );
};

export default Order;