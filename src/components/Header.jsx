import React, { useContext } from 'react'
import logo from '../assets/logo.jpg'
import Button from './UI/Button'
import  CartContext  from '../store/CartContext'

const Header = () => {
    const cartContext = useContext(CartContext);
    const totalCartItems = cartContext.items.length;

    return (
        <header id='main-header'>
            <div id='title'> 
                <img src={logo} alt="restoraunt" />
                <h1>ReactFood</h1>
            </div>

            <nav>
                <Button textOnly>Cart ({ totalCartItems })</Button>
            </nav>
        </header>
    )
}

export default Header