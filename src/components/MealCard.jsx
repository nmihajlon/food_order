import React from 'react'
import { currencyFormatter } from '../util/formatting.js'

const MealCard = ({ item }) => {
    return (
        <li className='meal-item'>
            <article>
                <img src={`http://localhost:3000/${item.image}`} alt={item.name} />
                <div>
                    <h3>{item.name}</h3>
                    <p className='meal-item-price'>${item.price}</p>
                    <p className='meal-item-description'>{currencyFormatter.format(item.price)}</p>
                </div>

                <p className='meal-item-actions'>
                    <button>Add to Cart</button>
                </p>
            </article>
        </li>
    )
}

export default MealCard