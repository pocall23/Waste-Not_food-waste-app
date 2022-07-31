import * as React from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { QUERY_SINGLE_FOOD } from '../../utils/queries';
import { REMOVE_FOOD } from '../../utils/mutations'
import { useParams } from 'react-router-dom';

import './SingleFood.css'

const SingleFood = () => {
  const {foodId} = useParams();
  console.log(foodId)

  const { loading, data } = useQuery(QUERY_SINGLE_FOOD, {
    variables: { foodId: foodId },
  });

  const food = data?.singleFood || [];
  
  const { removeFood } = useMutation(REMOVE_FOOD, {
    variables: { foodId: foodId },
  });

  const handleClick = async () => {
    removeFood(foodId)
  }
 
  
  console.log(food.image)

  if (loading) {
    return <div>Loading...</div>
  }
  return (
    <div className="card_container">
      <h2>
        {food.name}
      </h2>
      <div className="box">
        <div className="image_box" >
          <img src={food.image} alt={food.name}></img>
        </div>
        
        <div className='info_box'>
          <ul>
            <li>
              <h4>Description:</h4>
              <p>{food.description} </p> 
            </li>
            <li>
              <h4>Ingredients:</h4>
              <p>{food.ingredients.join(', ')} </p> 
    
            </li>
            <li>
            <h4>Expiry Date: {food.date} </h4>
               
            </li>
          </ul>
        </div>
      </div>
      
      <button className='grab_button' onClick={handleClick}> I'll grab this one! </button>
    </div>
  )
}

export default SingleFood;