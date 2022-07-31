import { gql } from '@apollo/client';

export const REMOVE_FOOD = gql`
  mutation removeFood($food: ID!) {
    removeFood(foodId: $foodId) {
      _id
      name
      description
      servings
      image
      ingredients
      expiry
    }
  }
  `;

