import * as React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_FOODS } from '../../utils/queries';

import FoodList from '../../components/Foodlist/FoodList';

const AvaliableFoods = () => {
  const { loading, error, data } = useQuery(QUERY_FOODS);
  console.log(loading)
  console.log(data);
  const foods = data?.foods || [];
  console.log(foods)

  return (
    <div className="container">
      <div className="col-12 col-md-10 my-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <FoodList
              foods={foods}
              title="Avaliable Foods"
            />
          )}
        </div>


    </div>
  )
}

export default AvaliableFoods;