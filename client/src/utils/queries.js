import { gql } from '@apollo/client';
export const QUERY_FOODS = gql`
  query allFoods {
    foods {
      _id
      name
      description
      image
      ingredients
      
    }
  }`;