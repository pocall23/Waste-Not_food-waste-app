import * as React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_FOODS } from '../../utils/queries';

import FoodList from '../../components/Foodlist/FoodList';
import FoodInputForm from '../../components/FoodInputForm/FoodInputForm';

import './AvailableFood.css'

const AvaliableFoods = () => {
  const { loading, error, data } = useQuery(QUERY_FOODS);
  
  const foods = data?.foods || [];
  console.log(foods)
  
  return (
    <div className="container">
      <div className="foodlist">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <FoodList
              foods={foods}
              title="Avaliable Foods"
            />
          )}
        </div>
        <div className="foodform">
          <h2 className='donateheading'>Add a new food to donate</h2>
          <FoodInputForm/>
          <button className='form_button'>add new food</button>
        </div>
        
    </div>
  )
}

export default AvaliableFoods;