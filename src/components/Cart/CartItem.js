import React, {useContext} from "react";
import CartContext from "../context/cart-context";
import classes from "./CartItem.module.css";

const CartItem = ({name,price,id,qty}) => {

  const cartCtx = useContext(CartContext);

  return (
    <li className={classes.cart__item}>
      <div>
        <h3>{name}</h3>
        <div className={classes.price__tag}>
          <p>${price}</p>
          <span>x{qty}</span>
        </div>
      </div>
      <div className={classes.qty__button}>
        <button onClick={() => cartCtx.removeFromCart(id)}>-</button>
        <button onClick={() => cartCtx.addToCart(price,id,qty,name)}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
