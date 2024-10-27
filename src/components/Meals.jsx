import React, { useEffect, useState } from 'react'
import { getAllMeals } from '../http.js'
import MealCard from './MealCard.jsx';
 
const Meals = ({  }) => {
    const [meals, setMeals] = useState([]);

    useEffect(()=>{
        const fetch = async () => {
            const data = await getAllMeals();
            
            setMeals(data);
        }

        fetch();
    }, [getAllMeals])

    return (
        <ul id='meals'>
            {meals.map(meal => {

                return (
                    <MealCard key={meal.id} item={meal}/>
                );
            })}
        </ul>
    )
}

export default Meals