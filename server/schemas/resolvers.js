const { Food } = require('../models');

const resolvers = {
  Query: {
    foods: async () => {
      return Food.find();
    },
    singlefood: async (foodId) => {
      return Food.findOne({ _id: foodId })
    }
  }
}

module.exports = resolvers;