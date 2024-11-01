import React, { useContext } from "react";
import Modal from "./UI/Modal";
import CartContext from "../store/CartContext";
import UserProgressContext from "../store/UserProgressContext";
import { currencyFormatter } from "../util/formatting.js";
import Button from "./UI/Button.jsx";
import CartItem from "./CartItem.jsx";

const Cart = () => {
  const cartContext = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);
  console.log(userProgressCtx.progress);

  const cartTotal = cartContext.items.reduce(
    (akumulator, item) => akumulator + item.quantity * item.price,
    0
  );

  function handleCloseCart() {
    userProgressCtx.hideCart();
  }

  function handleShowCheckout(){
    userProgressCtx.showCheckout();
  }

  return (
    //open ce da bude true
    <Modal className="cart" open={userProgressCtx.progress === "cart"} onClose={userProgressCtx.progress === "cart" ? handleCloseCart : null}>
      <h2>Your Cart</h2>
      <ul>
        {cartContext.items.map((item) => (
          <CartItem
            key={item.id}
            name={item.name}
            price={item.price}
            quantity={item.quantity}
            uvecaj={() => cartContext.addItem(item)}
            smanji={() => cartContext.removeItem(item.id)}
          />
        ))}
      </ul>
      <p className="cart-total">{currencyFormatter.format(cartTotal)}</p>
      <p className="modal-actions">
        <Button textOnly onClick={handleCloseCart}>
          Close
        </Button>
        {cartContext.items.length > 0 && <Button onClick={handleShowCheckout}>Go to Checkout</Button>}
      </p>
    </Modal>
  );
};

export default Cart;
