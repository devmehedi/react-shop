/* eslint-disable react/prop-types */
import './Cart.css';

const Cart = ({cart}) => {
    // console.log(cart)
    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for(const product of cart){
        // if(product.quantity === 0){
        //     product.quantity = 1;
        // }
        // product.quantity = product.quantity|| 1;

        
        total = total + product.price * product.quantity;
        shipping = shipping + product.shipping;
        quantity = quantity + product.quantity;
    }
    let tax = 0;
    tax = total * 7/100;

    const grandTotal = total + shipping+tax;

    return (
        <div className='cart'>
            <h2>Order Summary</h2>
            <p>Selected Items: {quantity}</p>
            <p>Total Price: ${total.toFixed(2)}</p>
            <p>Total Shipping Charge: ${shipping.toFixed(2)}</p>
            <p>Tax: ${tax.toFixed(2)}</p>
            <h3>Grand Total: ${grandTotal.toFixed(2)}</h3>
        </div>
    );
};

export default Cart;