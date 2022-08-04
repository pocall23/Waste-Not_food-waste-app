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
  `
  export const ADD_USER = gql`
  mutation addUser($name:String! , email: String!, $passowrd: String!){addUser(name: $name, email: $email, password: $password){
    token
    user {
      _id
      name
    }
  }
}`

export const LOGIN_USER = gql `
mutation login($email:String!, $password: String!){
  login(email: $email, password:$password){
    token
    profile {
      _id
      name
    }
  }
}`
  ;

