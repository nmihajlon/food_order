import React, { useContext } from "react";
import Modal from "./UI/Modal";
import CartContext from "../store/CartContext";
import { currencyFormatter } from "../util/formatting.js";
import Input from "./UI/Input.jsx";
import UserProgressContext from "../store/UserProgressContext.jsx";
import Button from './UI/Button';
import { useForm } from 'react-hook-form';
import { makeOrder } from '../http.js'

const Checkout = ({}) => {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);

  const cartTotal = cartCtx.items.reduce(
    (akumulator, item) => akumulator + item.quantity * item.price,
    0
  );

  const { register, handleSubmit, formState: {errors} } = useForm();

  const handleSubmitForm = async (data) => {
    await makeOrder( cartCtx.items, data );
    
    userProgressCtx.hideCheckout();
  }


  const handleClose = () => {
    userProgressCtx.hideCheckout();
  }

  return (
    <Modal open={userProgressCtx.progress === "checkout"} onClose={handleClose}>
      <form onSubmit={handleSubmit(handleSubmitForm)}>
        <h2>Checkout</h2>
        <p>Total Amount: {currencyFormatter.format(cartTotal)}</p>

        <Input {...register("name")} label="Full Name" id="fullName" type="text" />
        {errors.fullName && <p className="error">{errors.fullName.message}</p>}

        <Input {...register("email")} label="Email Address" id="email" type="email" />
        {errors.email && <p className="error">{errors.email.message}</p>}

        <Input {...register("street")} label="Street Address" id="streetAddress" type="text" />
        {errors.streetAddress && <p className="error">{errors.streetAddress.message}</p>}

        <div className="control-row">
          <Input {...register("postal-code")} label="Postal Code" id="postalCode" type="text" />
          {errors.postalCode && <p className="error">{errors.postalCode.message}</p>}

          <Input {...register("city")} label="City" id="city" type="text" />
          {errors.city && <p className="error">{errors.city.message}</p>}
        </div>

        <p className="modal-actions">
            <Button type="button" textOnly onClick={handleClose}>Close</Button>
            <Button>Submit Order</Button>
        </p>
      </form>
    </Modal>
  );
};

export default Checkout;
