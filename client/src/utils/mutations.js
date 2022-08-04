import { gql } from '@apollo/client';

export const ADD_FOOD = gql`
  mutation addFood($name: String!, $description: String!, $servings: String, $ingredients: [String], $imageUrl: String) {
    addFood(name: $name, description: $description, servings: $servings, ingredients: $ingredients, imageUrl: $imageUrl) {
      _id
      name
      description
      servings
      ingredients
      imageUrl
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

