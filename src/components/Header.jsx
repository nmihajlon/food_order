import React, { useContext } from 'react'
import logo from '../assets/logo.jpg'
import Button from './UI/Button'
import  CartContext  from '../store/CartContext'
import UserProgressContext from '../store/UserProgressContext'

const Header = () => {
    const cartContext = useContext(CartContext);
    const userProgressCtx = useContext(UserProgressContext)
    const totalCartItems = cartContext.items.reduce((akumulator, item) => {
        return akumulator + item.quantity;
    }, 0);

    function handleShowCart(){
        userProgressCtx.showCart();            
    }

    return (
        <header id='main-header'>
            <div id='title'> 
                <img src={logo} alt="restoraunt" />
                <h1>ReactFood</h1>
            </div>

            <nav>
                <Button textOnly onClick={handleShowCart}>
                    Cart ({ totalCartItems })
                </Button>
            </nav>
        </header>
    )
}

export default Header