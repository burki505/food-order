import { useContext, useEffect } from "react";
import Header from "./components/Header/Header";
import NavMenu from "./components/Header/NavMenu";
import MenusList from "./components/Menus/MenusList";
import Cart from "./components/Cart/Cart";
import cartContext from "./components/context/cart-context";

function App() {

  const cartCtx = useContext(cartContext);

  const {isCartOpen, cart, addToCart} = cartCtx;
  

  console.log(cart);

  

  return (
    <div className="App">
      <NavMenu />
      <Header />
      <MenusList  />
      {isCartOpen && <Cart />}
    </div>
  );
}

export default App;
