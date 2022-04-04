import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Meal from '../Meal/Meal';
import Order from '../Order/Order';


// search functionality add korar jnne first e akta gudam ghor er moto sob kisu show koran lagbe , er por setar mddhe search kore kore dekhanor bebostha kore local storage use kora lagbe , ata na korle local storage gor bor korbe 

const Meals = () => {
    const [meals,setMeals] = useState([]);
    const [cart,setCart] = useState([]);

    useEffect(()=>{
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=`)
        .then(res => res.json())
        .then(data => {setMeals(data.meals);
            setMatchedMeals(data.meals)
        })
    },[])

   

    useEffect(()=>{
        if(meals.length){
            const savedCart = getStoredCart();
            const storedCart = [];
            
            for(const idMeal in savedCart){
                const addedMeal = meals.find(meal => meal.idMeal === idMeal);
                if(addedMeal){
                    const quantity = savedCart[idMeal];
                    addedMeal.quantity = quantity;
                    storedCart.push(addedMeal);
                }
            }
            setCart(storedCart)
            
        }
        
    },[meals])

    // search functionality
    const [matchedMeals, setMatchedMeals] = useState([]);

    const handleSearch = e =>{
        const searchText = e.target.value;
        const matchedMeal = meals.filter (meal => meal.strMeal.toLowerCase().includes(searchText.toLowerCase()))
        setMatchedMeals(matchedMeal);
    }

    const handleAddToCart = meal=>{
        if(!meal.quantity){
            meal.quantity = 1;
        }
        let newCart = [...cart,meal];
        setCart(newCart);
        addToDb(meal.idMeal);
    }
    return (
        <Container>
            <div className="search-container text-center mt-3 mb-3">
                <input onChange={handleSearch} className='w-75' type="text" placeholder='Search your food here' />
            </div>


        <Row>
            <Col xs={12} md={9}>
                
            <Row xs={1} md={3} className="g-4">
            {
                    matchedMeals.map(meal => <Meal
                        handleAddToCart = {handleAddToCart}
                    key={meal.idMeal}
                     meal={meal}></Meal>)
            }
            </Row>
      
            </Col>
            <Col xs={6} md={3}>
                <Order cart={cart}></Order>
            </Col>
        </Row>
            
            
            

            
            
        </Container>
    );
};

export default Meals;