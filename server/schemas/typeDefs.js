const { gql } = require ('apollo-server-express');

const typeDefs = gql `
type Food {
  _id: ID
  name: String!
  description: String!
  servings: Int
  imageUrl: String
  public_id: String
  ingredients: [String]
  
}

type Query {
  foods:[Food]
  singlefood(foodId: ID!): [Food]
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

type Mutation {
  addUser(name: String!, email: String!, password: String!): Auth
  login(email:String!, password:String!): Auth
  removeUser(userId: ID!): User
  singleFood(foodId: ID!): Food
}

type Mutation {
  removeFood(foodId: ID!): Food
}
`

module.exports = typeDefs;