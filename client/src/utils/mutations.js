import { gql } from '@apollo/client';

export const ADD_FOOD = gql`

  mutation addFood($name: String!, $description: String!, $expiry: String, $imageUrl: String, $servings: String, $ingredients: String,) {
    addFood(name: $name, description: $description, expiry: $expiry, imageUrl: $imageUrl, servings: $servings, ingredients: $ingredients) {

      _id
      name
      description
      servings
      ingredients
      imageUrl
      expiry

    }
  }`


export const REMOVE_FOOD = gql`
  mutation removeFood($foodId: ID!) {
    removeFood(foodId: $foodId) {
      _id
      name
      description
      servings
      imageUrl
      ingredients
      expiry
    }
  }
  `;

