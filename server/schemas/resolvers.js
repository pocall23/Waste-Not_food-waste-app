const { Food } = require('../models');

const resolvers = {
  Query: {
    foods: async () => {
      return await Food.find({})
    }
  }
}

module.exports = resolvers;