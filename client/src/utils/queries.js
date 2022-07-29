import { gql } from '@apollo/client';
export const QUERY_FOODS = gql`
  query allFoods {
    foods {
      _id
      name
      description
      image
      ingredients
    },

  }`;

  export const QUERY_SINGLE_FOOD =gql`
    query singleFood ($foodId: ID!) {
      food(foodiD: $foodId) {
        _id
        name
        description
        image
        ingredients
      }
    

    }`;