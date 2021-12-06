import React, {useContext} from 'react';
import reactDom from 'react-dom';
import ReactDOM from 'react-dom';
import CartContext from '../context/cart-context';
import Card from "./Card";
import classes from "./Modal.module.css";


const Backdrop = (props) => {

    const cartCtx = useContext(CartContext);
    const closeModalHandler = () => {
        cartCtx.closeCart();
    }


    return <div onClick={closeModalHandler} className={classes.Backdrop}></div>
};

const ModalOverlay = (props) => {
    return <div className={classes.modal__overlay__container}>
        <div>{props.children}</div>
    </div>
}

const Modal = (props) => {

   

    return <>
        {ReactDOM.createPortal(<Backdrop />, document.getElementById("backdrop__root"))}
        {reactDom.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, document.getElementById("modal__root"))}
    </>
    
}

export default Modal
