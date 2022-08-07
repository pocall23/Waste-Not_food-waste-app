import { gql } from '@apollo/client';

export const QUERY_USER = gql`
query User($username: String!) {
  user(username: $username) {
    _id
    username
    email
    foods {
      _id
      name
      donatedBy
      description
      servings
      imageUrl
      ingredients
      expiry
    }
  }
}`


export const QUERY_FOODS = gql`
  query allFoods {
    foods {
      _id
      name
      donatedBy
      description
      servings
      imageUrl
      ingredients
      expiry
    },

  }`;

  export const QUERY_SINGLE_FOOD =gql`
    query singleFood ($foodId: ID!) {
      singleFood(foodId: $foodId) {
        _id
        name
        donatedBy
        description
        imageUrl
        ingredients
        expiry
      }
    

    }`;