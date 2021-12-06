import React, {useContext, useRef} from 'react';
import CartContext from '../context/cart-context';
import classes from "./Menu.module.css";

const Menu = (props) => {

    const cartCtx = useContext(CartContext);

    const ref = useRef();

    

    const submitHandler = (e) => {
        e.preventDefault();
        const totalQty = +ref.current.value;
        const totalPrice = +props.price * totalQty;
        cartCtx.addToCart(props.price,props.id,totalQty,props.name);
        console.log(ref.current);
    }

    return <li className={classes.menu__item}>
        <div className={classes.menu__item__exp}>
            <h3>{props.name}</h3>
            <span>{props.description}</span>
            <p>${props.price}</p>
        </div>
        <form onSubmit={submitHandler} className={classes.menu__item__form}>
            <div>
                <label htmlFor="amount">Amount</label>
                <input ref={ref} type="number" name="" id="amount" min="1" max="5" defaultValue="1"/>
            </div>
            <button>+ Add</button>
        </form>
    </li>
}

export default Menu
