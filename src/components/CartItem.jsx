import React from 'react'
import { currencyFormatter } from '../util/formatting.js'

const CartItem = ({ name, quantity, price, uvecaj, smanji }) => {
    return (
        <li className='cart-item'>
            <p>{name} - {quantity} x {currencyFormatter.format(price)}</p>
            <p className='cart-item-actions'>
                <button onClick={smanji}>-</button>
                <span>{quantity}</span>
                <button onClick={uvecaj}>+</button>
            </p>
        </li>
    )
}

export default CartItem