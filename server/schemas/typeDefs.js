const { gql } = require ('apollo-server-express');

const typeDefs = gql `
type Food {
  _id: ID
  name: String!
  description: String!
  servings: Int
  imageUrl: String
  public_id: String
  ingredients: String
  expiry: String
}

type Query {
  foods:[Food]
  singleFood(foodId: ID!): [Food]
  user(id: ID!): User
}

type Auth {
  token: ID!
  user: User
}

type User {
  _id : ID!
  name: String
  email: String
  password: String
}
type Users{
  _id : ID!
  name: String
}

type Mutation {

  singleFood(foodId: ID!): Food
}

type Mutation {

  addFood(name: String!, description: String!, servings: String, expiry: String, imageUrl: String, ingredients: String): Food

  removeFood(foodId: ID!): Food
}

type mutation {
  addUser(name: String!, email: String!, password: String!): Auth

  User(userId: ID!, name: String!)

  login(email:String!, password:String!): Auth

  removeUser(userId: ID!): User
}
`

module.exports = typeDefs;