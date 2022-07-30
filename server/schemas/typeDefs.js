const { gql } = require ('apollo-server-express');

const typeDefs = gql `
type Food {
  _id: ID
  name: String!
  description: String!
  image: String
  ingredients: [String]

}

type Query {
  foods:[Food]
  singlefood(foodId: ID!): [Food]
}
`

module.exports = typeDefs;