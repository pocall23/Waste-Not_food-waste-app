const { Food } = require('../models');

const resolvers = {
  Query: {
    foods: async () => {
      return Food.find()
    }
  }
}

module.exports = resolvers;