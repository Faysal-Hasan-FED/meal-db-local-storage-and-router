import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const MealDetail = () => {
    const {mealId} = useParams({});
    const [mealDetails, setMealDetails] = useState({});
    useEffect(()=>{
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
        .then(res => res.json())
        .then(data => setMealDetails(data.meals[0]))
    },[])
    return (
        <div>
            <h2>{mealDetails?.strMeal} </h2>
        </div>
    );
};

export default MealDetail;