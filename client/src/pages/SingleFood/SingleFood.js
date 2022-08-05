import * as React from 'react';
import { useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { QUERY_SINGLE_FOOD } from '../../utils/queries';
import { REMOVE_FOOD } from '../../utils/mutations'
import { Link, useParams } from 'react-router-dom';

import './SingleFood.css'

const SingleFood = () => {
  const {foodId} = useParams();

  const [Available, SetAvailable] = useState(true);

  console.log(foodId)

  const { loading, data } = useQuery(QUERY_SINGLE_FOOD, {
    variables: { foodId: foodId },
  });

  const food = data?.singleFood || [];
  
  console.log(food)

  const [ removeFood ] = useMutation(REMOVE_FOOD, {
      variables: { foodId: foodId },
    });


  const handleClick = async () => {
    console.log(food)
    if (food) {

      const { data } = await removeFood(foodId)
      SetAvailable(!Available)
      // window.location.reload();
      
      
      // Auth.login(data.addProfile.tokon

      // console.log(`Food doesn't exist`)
    }
  }
 

  if (loading) {
    return <div>Loading...</div>
  }

  if (!Available) {
    return (
      <div className="card_container">
        <h2> The food was purchased and is no longer avaliable</h2>
        <button className='grab_button' > 
          <Link to={`/Foods`}>
            Return to able Available Foods page
          </Link> 
        </button>

      </div>
    )
  }

  return (
    <div className="card_container">
      <h2>
        {food.name}
      </h2>
      <div className="box">
        <div className="image_box" >
          <img src={food.imageUrl} alt={food.name}></img>
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
      <button className='grab_button'> 
        <Link to={`/Foods`}>
          Return to Avilable Foods page
        </Link> 
         
      </button>
      <button className='grab_button' onClick={ handleClick }> I'll grab this one! </button>
    </div>
  )
}

export default SingleFood;