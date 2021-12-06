import React, {useContext} from 'react';
import Modal from "../UI/Modal";
import CartItem from './CartItem';
import CartContext from '../context/cart-context';
import classes from "./Cart.module.css";



const Cart = (props) => {

    const cartCtx = useContext(CartContext);

    const {cart, totalPrice} = cartCtx;

    

    return <Modal>
        
        <ul className={classes.cart}>
        {cart.length === 0 && <p>No Item Found</p>}
            {cart.map(item => {
                return <CartItem id={item.id} price={item.price} name={item.name} qty={item.qty} />
            })}
        </ul>

        <div className={classes.amount__group}>
            <div className={classes.total__amount}>
                <h2>Total Amount</h2>
                <p>${totalPrice}</p>
            </div>
            <div className={classes.button__group}>
                <button onClick={() => cartCtx.closeCart()}>Close</button>
                <button>Order</button>
            </div>
        
        </div>
    </Modal>
}

export default Cart
