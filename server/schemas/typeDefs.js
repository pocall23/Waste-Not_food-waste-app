const { gql } = require ('apollo-server-express');

const typeDefs = gql `
type Food {
  _id: ID
  title: String!
  description: String!
  imageUrl: String
  public_id: String

}

type Query {
  foods:[Food]
  singlefood(foodId: ID!): [Food]
}
`

module.exports = typeDefs;