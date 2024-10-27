import React, { useContext } from 'react'
import { currencyFormatter } from '../util/formatting.js'
import Button from './UI/Button.jsx'
import CartContext from '../store/CartContext.jsx'

const MealCard = ({ item }) => {
    const cartContext = useContext(CartContext);

    function handleAddMealToCart(item){
        cartContext.addItem(item);
    }

    return (
        <li className='meal-item'>
            <article>
                <img src={`http://localhost:3000/${item.image}`} alt={item.name} />
                <div>
                    <h3>{item.name}</h3>
                    <p className='meal-item-price'>{currencyFormatter.format(item.price)}</p>
                    <p className='meal-item-description'>{item.description}</p>
                </div>

                <p className='meal-item-actions'>
                    <Button onClick={() => handleAddMealToCart(item)}> Add to Cart</Button>
                </p>
            </article>
        </li>
    )
}

export default MealCard