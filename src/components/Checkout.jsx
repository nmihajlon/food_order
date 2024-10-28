import React, { useContext } from 'react'
import Modal from './UI/Modal'
import CartContext from '../store/CartContext'
import { currencyFormatter } from "../util/formatting.js";

const Checkout = () => {
    const cartCtx = useContext(CartContext)

    const cartTotal = cartCtx.items.reduce(
        (akumulator, item) => akumulator + item.quantity * item.price,
        0
    );

    return (
        <Modal>
            <form>
                <h2>Checkout</h2>
                <p>Total Amount: {currencyFormatter.format(cartTotal)}</p>
            </form>
        </Modal>
    )
}

export default Checkout