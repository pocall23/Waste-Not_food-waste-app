import { gql } from '@apollo/client';

export const ADD_FOOD = gql`
  mutation addFood($name:String) {
    addFood(name: $name) {
      name
      description
      servings
      imageUrl
      ingredients
      
    }
  }`

export const REMOVE_FOOD = gql`
  mutation removeFood($food: ID!) {
    removeFood(foodId: $foodId) {
      _id
      name
      description
      servings
      imageUrl
      
      ingredients
      
    }
  }
  `;

