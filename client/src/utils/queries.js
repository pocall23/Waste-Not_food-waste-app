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
        expiry
      }
    

    }`;
    export const QUERY_USERS = gql`
    query allUser{
      users {
        _id
        name
      }
    }`;
    export const QUERY_SINGLE_PROFILES = gql`
    query singleProfile($profileId: ID!){
      _id
      name
    }`;

    export const QUERY_USER = gql`
    query user {
      user{ 
        _id
        name
      }
    }`
;