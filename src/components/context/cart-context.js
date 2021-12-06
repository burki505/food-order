import React, {useReducer} from "react";


const CartContext = React.createContext({
    isCartOpen: false,
    isCartChanged: false,
    cart: [],
    openCart: () => {},
    closeCart: () => {},
    addToCart: () => {},
    removeFromCart: () => {},
    totalAmount: 0,
    overallPrice: 0
});

const initialReducer = {
    isCartVisible: false,
    isChanged: false,
    cartItems: [],
    overallPrice: 0
}

const cartReducer = (state,action) => {

 
    switch(action.type){

        case "OPENCART":
            return {
                ...state,
                isCartChanged: false,
                isCartVisible: true
            }

        case "CLOSECART":
            return {
                ...state,
                isCartChanged: false,
                isCartVisible: false
            }
        
        case "ADDTOCART":
            
            let newCartItems = [...state.cartItems];
            const itemIndex = newCartItems.findIndex(item => item.id === action.val.id);

  

            if(itemIndex >= 0){
               
                newCartItems[itemIndex].qty += 1;
                const totalQty = +newCartItems[itemIndex].qty;
                const totalPrice = +action.val.price * totalQty;
                newCartItems[itemIndex].overallPrice = totalPrice;
                return{
                    ...state,
                    isChanged: true,
                    cartItems: [...newCartItems]
                }
            }
      
            // const totalQty = +action.val.qty;
            // const totalPrice = +action.val.price * totalQty;
                return{
                    ...state,
                    isChanged: true,
                    cartItems: [...state.cartItems, {id: action.val.id, price: action.val.price, qty: action.val.qty, name: action.val.name, overallPrice: +action.val.price * +action.val.qty}]
                }
            
        case "REMOVEFROMCART":
            let updatedCartItems = [...state.cartItems];
            let foundItem = updatedCartItems.findIndex(item => item.id === action.val.id);
            
            if(foundItem >= 0){
                updatedCartItems[foundItem].qty -= 1;

                console.log(updatedCartItems[foundItem].qty);

                const totalQty = +updatedCartItems[foundItem].qty;
                const totalPrice = +updatedCartItems[foundItem].price * totalQty;
                updatedCartItems[foundItem].overallPrice = totalPrice;
                    
                if(updatedCartItems[foundItem].qty <= 0){
                    console.log("no qty");
                    updatedCartItems = [...updatedCartItems.filter(item => item.id !== action.val.id)];
                    console.log(updatedCartItems);
                    return {
                        ...state,
                        isChanged: true,
                        cartItems: [...updatedCartItems]
                    }
                }
                return {
                    ...state,
                    isChanged: true,
                    cartItems: [...updatedCartItems]
                }
            }
            return ;

       

        default:
            return state
    }
 };


export const CartContextProvider = (props) => {

    const [cartReduce, dispatch] = useReducer(cartReducer, initialReducer);

    const openCartHandler = () => {
        dispatch({type: "OPENCART"});
    }

    const closeCartHandler = () => {
        dispatch({type: "CLOSECART"});
    }

    const addToCartHandler = (price,id,qty,name) => {
        dispatch({type: "ADDTOCART", val: {price,id,qty,name}});
    }

    const removeFromCartHandler = (id) => {
        dispatch({type: "REMOVEFROMCART", val: {id}});
    }
 


    return <CartContext.Provider value={{
        isCartOpen: cartReduce.isCartVisible,
        cart: [...cartReduce.cartItems],
        isCartChanged: cartReduce.isChanged,
        openCart: openCartHandler,
        closeCart: closeCartHandler,
        addToCart: addToCartHandler,
        removeFromCart: removeFromCartHandler,
        totalAmount: cartReduce.cartItems.length > 0 ? cartReduce.cartItems.map(item => item.qty).reduce((total,num) => total + num) : 0,
        totalPrice: cartReduce.cartItems.length > 0 ? cartReduce.cartItems.map(item => item.overallPrice).reduce((total,num) => total + num) : 0,
    }}>
        {props.children}
    </CartContext.Provider>
};


export default CartContext;