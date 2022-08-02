import { gql } from '@apollo/client';
export const QUERY_FOODS = gql`
  query allFoods {
    foods {
      _id
      name
      description
      servings
      imageUrl
      public_id
      ingredients
      expiry
    },

  }`;

  export const QUERY_SINGLE_FOOD =gql`
    query singleFood ($foodId: ID!) {
      singleFood(foodId: $foodId) {
        _id
        name
        description
        imageUrl
        ingredients
        
      }
    

    }`;