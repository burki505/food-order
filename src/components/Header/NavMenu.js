import React, {useContext} from 'react';
import CartContext from '../context/cart-context';
import classes from "./NavMenu.module.css";

const Header = () => {

    const cartCtx = useContext(CartContext);

    const { openCart, totalAmount, isCartChanged} = cartCtx;

    console.log(isCartChanged);

    return <div className={classes.nav__container}>
        <nav className={classes.nav}>
            <h1>ReactMeals</h1>
            <button className={isCartChanged ? classes.active : ""} onClick={() => openCart()}>
            <i class="fas fa-shopping-cart"></i>
            <span>Your Cart</span>
            <span className={classes.item__count}>{totalAmount}</span>
            </button>
        </nav>
        
            
        </div>
    
}

export default Header
