import React, { useEffect, useState } from 'react'
import { getAllMeals } from '../http.js'
 
const Meals = ({  }) => {
    const [meals, setMeals] = useState([]);

    useEffect(()=>{
        const fetch = async () => {
            const data = await getAllMeals();
            
            setMeals(data);
        }

        fetch();
    }, [])

    return (
        <ul id='meals'>
            {meals.map(meal => {

                return (
                    <li key={meal.id}>{meal.name}</li>
                );
            })}
        </ul>
    )
}

export default Meals