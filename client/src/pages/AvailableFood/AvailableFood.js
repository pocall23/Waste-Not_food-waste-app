import * as React from 'react';


import FoodList from '../../components/Foodlist/FoodList';
import FoodInputForm from '../../components/FoodInputForm/FoodInputForm';

import './AvailableFood.css'

const AvaliableFoods = (props) => {
  
  const foods = props.data?.foods || [];
  console.log(foods)
  
  return (
    <div className="container1">
      <div className="foodlist">
          {props.loading ? (
            <div>Loading...</div>
          ) : (
            <FoodList
              foods={foods}
              title="Avaliable Foods"
            />
          )}
        </div>
        <div className="foodform">
          <h2 className='donateheading'>Add a new donation</h2>
          <FoodInputForm/>
          
        </div>
        
    </div>
  )
}

export default AvaliableFoods;